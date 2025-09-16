const root = document.querySelector('.page');
const tocLinks = Array.from(document.querySelectorAll('.sidebar a[href^="#"]'));
const tocEntries = tocLinks.map((link) => ({
  link,
  target: document.getElementById(link.hash.replace('#', '')),
}));
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');
const themeToggle = document.getElementById('theme-toggle');

const topLevelSections = Array.from(document.querySelectorAll('article > section[id]'));
const nestedSections = Array.from(document.querySelectorAll('article section section[id]'));

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = localStorage.getItem('taskly-doc-theme') || (prefersDark ? 'dark' : 'light');

const buildSearchIndex = () => {
  const uniqueSections = Array.from(new Set([...topLevelSections, ...nestedSections]));
  return uniqueSections.map((section) => ({
    id: section.id,
    title: section.dataset.title || section.querySelector('h2, h3')?.textContent || section.id,
    text: section.innerText.replace(/\s+/g, ' ').trim().toLowerCase(),
  }));
};

const searchIndex = buildSearchIndex();

function highlightCode() {
  const blocks = Array.from(document.querySelectorAll('pre code'));
  if (window.hljs) {
    blocks.forEach((block) => window.hljs.highlightElement(block));
    return;
  }
  // Fallback: minimal C# highlighter when CDN is unavailable
  const csBlocks = blocks.filter((b) => /\blanguage-cs(harp)?\b/.test(b.className));
  csBlocks.forEach((block) => {
    if (block.dataset.highlighted === 'true') return;
    const html = simpleCSharpHighlight(block.textContent || '');
    block.innerHTML = html;
    block.classList.add('hljs');
    block.dataset.highlighted = 'true';
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function simpleCSharpHighlight(source) {
  const s = source;
  const segments = [];
  let i = 0;
  const push = (type, text) => segments.push({ type, text });

  while (i < s.length) {
    // Single-line comment
    if (s.startsWith('//', i)) {
      const j = s.indexOf('\n', i);
      const end = j === -1 ? s.length : j;
      push('comment', s.slice(i, end));
      i = end;
      continue;
    }
    // Multi-line comment
    if (s.startsWith('/*', i)) {
      const j = s.indexOf('*/', i + 2);
      const end = j === -1 ? s.length : j + 2;
      push('comment', s.slice(i, end));
      i = end;
      continue;
    }
    // Verbatim string @"..."
    if (s.startsWith('@"', i)) {
      let j = i + 2;
      while (j < s.length) {
        if (s[j] === '"' && s[j + 1] === '"') { j += 2; continue; }
        if (s[j] === '"') { j++; break; }
        j++;
      }
      push('string', s.slice(i, j));
      i = j;
      continue;
    }
    // Regular string "..."
    if (s[i] === '"') {
      let j = i + 1;
      while (j < s.length) {
        if (s[j] === '\\') { j += 2; continue; }
        if (s[j] === '"') { j++; break; }
        j++;
      }
      push('string', s.slice(i, j));
      i = j;
      continue;
    }
    // Char literal
    if (s[i] === "'") {
      let j = i + 1;
      if (s[j] === '\\') j += 2;
      while (j < s.length && s[j] !== "'") j++;
      if (j < s.length) j++;
      push('string', s.slice(i, j));
      i = j;
      continue;
    }
    // Otherwise accumulate plain until next delimiter
    let j = i + 1;
    while (j < s.length) {
      const ch2 = s[j] + s[j + 1];
      if (
        s[j] === '"' || s[j] === "'" ||
        ch2 === '//' || ch2 === '/*' || ch2 === '@"'
      ) break;
      j++;
    }
    push('plain', s.slice(i, j));
    i = j;
  }

  const keywordRe = /\b(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|record|var|dynamic|global|required|file)\b/g;
  const numberRe = /\b(?:0x[\da-fA-F]+|\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?(?:[eE][+-]?\d+)?)\b/g;
  const typeRe = /\b([A-Z][A-Za-z0-9_]+)\b/g;

  function highlightPlain(text) {
    let out = escapeHtml(text);
    out = out.replace(numberRe, '<span class="hljs-number">$&</span>');
    out = out.replace(keywordRe, '<span class="hljs-keyword">$1</span>');
    // Avoid coloring after a dot (namespace.member) or attribute brackets
    out = out.replace(typeRe, (m, g1, offset, str) => {
      const prev = str[offset - 1] || ' ';
      if (/[\w\)]/.test(prev)) return m; // likely member or generic constraint
      return `<span class="hljs-type">${g1}</span>`;
    });
    // Highlight attributes like [HttpGet], [Authorize]
    out = out.replace(/\[[A-Za-z_][\w]*(?:\s*\([^\)\n]*\))?\]/g, '<span class="hljs-attr">$&</span>');
    // Highlight preprocessor directives starting with #
    out = out.split('\n').map((line) => {
      if (/^\s*#/.test(line)) {
        return `<span class="hljs-meta">${line}</span>`;
      }
      return line;
    }).join('\n');
    return out;
  }

  return segments.map((seg) => {
    if (seg.type === 'comment') return `<span class="hljs-comment">${escapeHtml(seg.text)}</span>`;
    if (seg.type === 'string') return `<span class="hljs-string">${escapeHtml(seg.text)}</span>`;
    return highlightPlain(seg.text);
  }).join('');
}

const renderMermaidDiagrams = () => {
  if (!window.mermaid) return;
  const mermaidNodes = Array.from(document.querySelectorAll('.mermaid'));
  // Only process nodes that have not been rendered yet
  const pending = mermaidNodes.filter((n) => !n.dataset.processed && !n.querySelector('svg'));
  if (!pending.length) return;

  if (typeof window.mermaid.run === 'function') {
    window.mermaid.run({ nodes: pending });
  } else if (typeof window.mermaid.init === 'function') {
    window.mermaid.init(undefined, pending);
  } else if (typeof window.mermaid.contentLoaded === 'function') {
    window.mermaid.contentLoaded();
  }
};

const applyTheme = (theme) => {
  currentTheme = theme;
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
  }
  localStorage.setItem('taskly-doc-theme', theme);

  if (window.mermaid) {
    const mermaidTheme = theme === 'dark' ? 'dark' : 'default';
    const styles = getComputedStyle(root);
    const brand = styles.getPropertyValue('--color-brand').trim();
    const brandSofter = styles.getPropertyValue('--color-brand-softer').trim();
    const brandBorder = styles.getPropertyValue('--color-brand-border').trim();
    const textColor = styles.getPropertyValue('--color-text').trim();

    window.mermaid.initialize({
      startOnLoad: false,
      theme: mermaidTheme,
      securityLevel: 'loose',
      themeVariables: {
        /* generic */
        background: 'transparent',
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, sans-serif',
        primaryColor: brandSofter,
        primaryBorderColor: brandBorder,
        primaryTextColor: textColor,
        secondaryColor: brandSofter,
        tertiaryColor: brandSofter,
        tertiaryBorderColor: brandBorder,
        tertiaryTextColor: textColor,
        lineColor: brand,
        edgeLabelBackground: brandSofter,
        /* clusters */
        clusterBkg: brandSofter,
        clusterBorder: brandBorder,
        /* sequence */
        actorBorder: brandBorder,
        actorBkg: brandSofter,
        signalColor: brand,
        labelBoxBkgColor: brandSofter,
      },
      themeCSS: `
        .cluster rect { fill: ${brandSofter}; stroke: ${brandBorder}; }
        .cluster text { fill: ${textColor}; }
        /* flowchart nodes */
        .node > rect, .node > circle, .node > ellipse, .node > polygon { fill: ${brandSofter}; stroke: ${brandBorder}; }
        .node text { fill: ${textColor}; }
        .edgePath .path { stroke: ${brand}; }
        .label text { fill: ${textColor}; }
        /* sequence diagram */
        .actor rect { fill: ${brandSofter}; stroke: ${brandBorder}; }
        .actor text { fill: ${textColor}; }
        .messageLine0, .messageLine1 { stroke: ${brand}; }
        .note { fill: ${brandSofter}; stroke: ${brandBorder}; }
      `,
    });
    renderMermaidDiagrams();
  }

  highlightCode();
};

applyTheme(currentTheme);

const setActiveLinks = (topId, nestedId = null) => {
  tocLinks.forEach((link) => {
    const target = link.hash.replace('#', '');
    const shouldHighlight = target === topId || (nestedId && target === nestedId);
    if (shouldHighlight) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'location');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
};

let activeTopSection = 'high-level';
let activeNestedSection = null;
setActiveLinks(activeTopSection);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      activeTopSection = id;
      activeNestedSection = null;
      setActiveLinks(activeTopSection);
    }
  });
}, {
  rootMargin: '-45% 0px -45% 0px',
});

topLevelSections.forEach((section) => sectionObserver.observe(section));

const nestedObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const parentSection = entry.target.closest('article > section');
      if (parentSection) {
        activeTopSection = parentSection.id;
        activeNestedSection = id;
        setActiveLinks(activeTopSection, activeNestedSection);
      }
    }
  });
}, {
  rootMargin: '-40% 0px -50% 0px',
});

nestedSections.forEach((section) => nestedObserver.observe(section));

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      const topParent = entry.target.closest('article > section');
      const topId = topParent ? topParent.id : sectionId;
      const nestedId = topParent ? sectionId : null;
      setActiveLinks(topId, nestedId);
    }
  });
}, {
  rootMargin: '-35% 0px -55% 0px',
  threshold: [0.3, 0.6],
});

topLevelSections.forEach((section) => scrollObserver.observe(section));
nestedSections.forEach((section) => scrollObserver.observe(section));

const renderSearchResults = (results) => {
  searchResults.innerHTML = '';
  if (!results.length) {
    searchResults.classList.remove('visible');
    return;
  }

  results.slice(0, 8).forEach((result) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = result.title;
    button.addEventListener('click', () => {
      const target = document.getElementById(result.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          target.classList.add('highlight');
          setTimeout(() => target.classList.remove('highlight'), 1200);
        }, 200);
      }
      searchResults.classList.remove('visible');
      searchInput.blur();
    });
    searchResults.appendChild(button);
  });

  searchResults.classList.add('visible');
};

if (searchInput && searchResults) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResults.classList.remove('visible');
      return;
    }

    const matches = searchIndex.filter((entry) => entry.text.includes(query) || entry.title.toLowerCase().includes(query));
    renderSearchResults(matches);
  });

  searchInput.addEventListener('focus', () => {
    if (searchResults.childElementCount > 0) {
      searchResults.classList.add('visible');
    }
  });

  document.addEventListener('click', (event) => {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.classList.remove('visible');
    }
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

const addCopyButtons = () => {
  // Do not add copy buttons to Mermaid blocks
  const codeBlocks = Array.from(document.querySelectorAll('pre:not(.mermaid)'));
  codeBlocks.forEach((block) => {
    if (block.querySelector('button.copy-btn')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', async () => {
      const content = block.innerText;
      try {
        await navigator.clipboard.writeText(content);
        const previous = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => (button.textContent = previous), 1500);
      } catch (err) {
        console.error('Failed to copy code', err);
        button.textContent = 'Error';
        setTimeout(() => (button.textContent = 'Copy'), 1500);
      }
    });
    block.appendChild(button);
  });
};

addCopyButtons();

const highlightStyle = document.createElement('style');
highlightStyle.textContent = `
  section.highlight {
    box-shadow: 0 0 0 3px var(--color-brand-contrast) inset;
  }
`;
document.head.appendChild(highlightStyle);

window.addEventListener('load', () => {
  renderMermaidDiagrams();
});

window.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (searchInput) searchInput.focus();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  });
}

const initAccordion = () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const question = item.querySelector('.accordion-question');
        const answer = item.querySelector('.accordion-answer');

        question.addEventListener('click', () => {
            // Close other active items
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            if (currentlyActiveItem && currentlyActiveItem !== item) {
                currentlyActiveItem.classList.remove('active');
                currentlyActiveItem.querySelector('.accordion-answer').style.maxHeight = null;
            }

            // Toggle the clicked item
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
};

initAccordion();
