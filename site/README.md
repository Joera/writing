# Polyphony site

Static site for the Polyphony white paper. Layout and type are taken from
atproto.com: a full-width fixed header, a fixed left sidebar (18rem) below it,
and the main column to the right. Every section of the paper is its own
static HTML page; nothing is loaded dynamically, and all links are relative so
the output can be served from a content-addressed root.

## Structure

```
templates/
  layout.hbs            page shell: header, aside, main
  partials/
    header.hbs          full-width bar; holds the contents menu on small screens
    aside.hbs           fixed left sidebar (from 1024px)
    nav.hbs             the flat contents list, shared by header and aside
    main.hbs            hero, article, previous/next
    footer.hbs          footer, with a placeholder for the page signature
assets/style.css        plain CSS; values from the atproto Tailwind build
content/white-paper.md  snapshot of the draft
build.js                splits the paper on "## " headings, one page each
```

## Build

```
npm install
npm run build                      # from content/white-paper.md
npm run build:live                 # from the shared project draft
```

Output goes to `dist/`. Abstract becomes `index.html`; other sections are
`<slug>.html`. The preamble above the abstract and the open-items list after
the closing `---` are left out.
