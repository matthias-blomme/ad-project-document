// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="appendices/resources.html">Resources</a></li><li class="chapter-item expanded affix "><a href="appendices/q_and_a.html">Q&amp;A</a></li><li class="chapter-item expanded affix "><li class="part-title">CONTEXT</li><li class="chapter-item expanded "><a href="project/project.html"><strong aria-hidden="true">1.</strong> Project</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="project/project_summary.html"><strong aria-hidden="true">1.1.</strong> Summary</a></li><li class="chapter-item "><a href="project/project_planning.html"><strong aria-hidden="true">1.2.</strong> Planning</a></li><li class="chapter-item "><a href="project/project_coaching.html"><strong aria-hidden="true">1.3.</strong> Coaching</a></li><li class="chapter-item "><a href="project/project_evaluation.html"><strong aria-hidden="true">1.4.</strong> Evaluation</a></li></ol></li><li class="chapter-item expanded "><a href="concept/concept.html"><strong aria-hidden="true">2.</strong> Concept</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="concept/conceptual_requirements.html"><strong aria-hidden="true">2.1.</strong> Requirements</a></li><li class="chapter-item "><a href="concept/concept_restrictions.html"><strong aria-hidden="true">2.2.</strong> Restrictions</a></li><li class="chapter-item "><a href="concept/concept_choise.html"><strong aria-hidden="true">2.3.</strong> Concept choice process</a></li></ol></li><li class="chapter-item expanded "><a href="partial_exam/partial_exam.html"><strong aria-hidden="true">3.</strong> Partial Exam</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="partial_exam/partial_exam_server.html"><strong aria-hidden="true">3.1.</strong> Server exam</a></li><li class="chapter-item "><a href="partial_exam/partial_exam_client.html"><strong aria-hidden="true">3.2.</strong> Client quiz</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">DELIVERABLES</li><li class="chapter-item expanded "><a href="deliverables/deliverables.html"><strong aria-hidden="true">4.</strong> Deliverables</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="deliverables/business_case.html"><strong aria-hidden="true">4.1.</strong> D1 - Business Case</a></li><li class="chapter-item "><a href="deliverables/project_website.html"><strong aria-hidden="true">4.2.</strong> D2 - Project website</a></li><li class="chapter-item "><a href="deliverables/analysis_document.html"><strong aria-hidden="true">4.3.</strong> D3 - Analysis document</a></li><li class="chapter-item "><a href="deliverables/partial_exam.html"><strong aria-hidden="true">4.4.</strong> D4 - Partial Exam</a></li><li class="chapter-item "><a href="deliverables/poc.html"><strong aria-hidden="true">4.5.</strong> D5 - Proof of Concept</a></li><li class="chapter-item "><a href="deliverables/project_work.html"><strong aria-hidden="true">4.6.</strong> D6 - Project work</a></li><li class="chapter-item "><a href="deliverables/retrospections_and_peers.html"><strong aria-hidden="true">4.7.</strong> D7 - Retrospections and peer assessments</a></li><li class="chapter-item "><a href="deliverables/presentations.html"><strong aria-hidden="true">4.8.</strong> D8 - Presentation</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">POC</li><li class="chapter-item expanded "><a href="poc/poc.html"><strong aria-hidden="true">5.</strong> Proof of Concept</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="poc/poc_server.html"><strong aria-hidden="true">5.1.</strong> Server</a></li><li class="chapter-item "><a href="poc/poc_client.html"><strong aria-hidden="true">5.2.</strong> Client</a></li><li class="chapter-item "><a href="poc/poc_test_environment.html"><strong aria-hidden="true">5.3.</strong> Test environment</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
