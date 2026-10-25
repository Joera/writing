// Renders the white paper into one static HTML page per top-level section.
// Usage: node build.js [--src path/to/white-paper.md] [--out dist]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Handlebars from 'handlebars';
import { Marked } from 'marked';

const here = path.dirname(fileURLToPath(import.meta.url));
const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const src = arg('--src', path.join(here, 'content/white-paper.md'));
const out = path.resolve(here, arg('--out', 'dist'));

const site = {
  title: 'Polyphony',
  mark: 'polyphony',
  description: 'A publishing protocol for independent authors and collective publications.',
  navLabel: 'White paper',
  links: [{ label: 'Protocol', href: 'index.html', current: true }],
  footer: 'Polyphony white paper · working draft',
  signature: 'Signature: not yet signed',
};

const slugify = (s) =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Split on "## " headings. The preamble before the first one and everything
// after the closing "---" (the open-items list) are working notes, not pages.
function sections(md) {
  const body = md.split(/\n---\s*\n/)[0];
  const parts = body.split(/^## /m).slice(1);
  return parts.map((part) => {
    const [heading, ...rest] = part.split('\n');
    const m = heading.trim().match(/^(\d+)\.\s+(.*)$/);
    return {
      number: m ? m[1] : null,
      title: m ? m[2] : heading.trim(),
      body: rest.join('\n').trim(),
    };
  });
}

// Inside a page the section title is the h1, so ### becomes h2, #### h3.
function renderer() {
  const marked = new Marked();
  marked.use({
    renderer: {
      heading(text, level) {
        const l = Math.min(Math.max(level - 1, 2), 6);
        const id = slugify(text);
        return `<h${l} id="${id}"><a class="anchor" href="#${id}" aria-label="Link to this section">#</a>${text}</h${l}>\n`;
      },
    },
  });
  return marked;
}

function load() {
  for (const f of fs.readdirSync(path.join(here, 'templates/partials'))) {
    Handlebars.registerPartial(
      path.basename(f, '.hbs'),
      fs.readFileSync(path.join(here, 'templates/partials', f), 'utf8'),
    );
  }
  Handlebars.registerHelper('or', (a, b) => a || b);
  return Handlebars.compile(fs.readFileSync(path.join(here, 'templates/layout.hbs'), 'utf8'));
}

const layout = load();
const marked = renderer();
const pages = sections(fs.readFileSync(src, 'utf8')).map((s, i) => ({
  ...s,
  href: i === 0 ? 'index.html' : `${slugify(s.title)}.html`,
}));

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'assets'), { recursive: true });
fs.copyFileSync(path.join(here, 'assets/style.css'), path.join(out, 'assets/style.css'));

pages.forEach((p, i) => {
  const html = layout({
    site,
    nav: pages.map((q) => ({ title: q.title, href: q.href, current: q === p })),
    page: {
      title: p.title,
      kicker: p.number ? `Section ${p.number}` : null,
      html: marked.parse(p.body),
      prev: pages[i - 1] && { title: pages[i - 1].title, href: pages[i - 1].href },
      next: pages[i + 1] && { title: pages[i + 1].title, href: pages[i + 1].href },
    },
  });
  fs.writeFileSync(path.join(out, p.href), html);
});

console.log(`Wrote ${pages.length} pages to ${path.relative(process.cwd(), out) || '.'}`);
