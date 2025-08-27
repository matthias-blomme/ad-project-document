# Example book

mdbook example
- https://github.com/rust-lang/mdBook/tree/master/guide/src

# mdbook documentation

mdbook documentation:
- https://rust-lang.github.io/mdBook/index.html

# Build

**mdbook build** will build the book in the **dist** directory.

```bash
./mdbook-{os} build book --dest-dir dist
```

# Run on localhost

**mdbook serve** will start a local web server and open the book in your default browser.

Each time you save a file, the book will be automatically rebuilt and the browser will refresh to show the changes.

```bash	
./mdbook-{os} serve book --dest-dir dist --open
```

# Mermaid support

- Create a folder HowestPrimeBook/plugins
- Copy the mdbook-mermaid executable for your os to the plugins folder
  - See: https://github.com/badboy/mdbook-mermaid/releases

# Deploy this book

Execute a git push to the main branch.
See github actions for the deployment.


./mdbook-apple serve book --dest-dir dist --open



# mac: install with brew
- brew install mdbook
- mdbook serve book --dest-dir dist --open