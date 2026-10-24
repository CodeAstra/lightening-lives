// Eleventy builds the pages from src/site into dist/. Everything in src/assets (the logo, pictures,
// type, and the stylesheet and scripts that scripts/build.mjs compiles) is copied to dist/assets.
import { CONDITIONS } from './src/js/site/contact.js';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  // The browser looks for these at the site's root.
  eleventyConfig.addPassthroughCopy({
    'src/site/favicon.svg': 'favicon.svg',
    'src/site/favicon.ico': 'favicon.ico',
    'src/site/site.webmanifest': 'site.webmanifest',
  });

  // Every page uses the one layout unless it names another.
  eleventyConfig.addGlobalData('layout', 'layout.njk');

  // A page marked draft: true is written but not published: it is left out of the build.
  eleventyConfig.addPreprocessor('drafts', '*', (data) => {
    if (data.draft) return false;
  });

  // picture.njk names a photograph npm run images has not written: stop the build rather than
  // publish an empty srcset.
  eleventyConfig.addFilter('unknownImage', (name) => {
    throw new Error(`picture(): no image "${name}" in src/site/_data/images.json (run npm run images)`);
  });

  // The footer credits what its page shows: a photograph whose file the page's body names, and the
  // map's outline where the page draws the map. The company's own pictures (box-, person-) are not
  // stand-ins: they are never credited, so a page that shows only those has no credits and no
  // "representative" line.
  const own = (row) => /^(box|person)-/.test(row.basename);
  eleventyConfig.addFilter('creditsFor', (rows, html = '') =>
    rows.filter((row) => !own(row) && (row.basename === 'map-india' ? /\sdata-map[\s>]/.test(html) : html.includes(`/assets/img/${row.basename}-`))));

  // The rows that are representative photographs (the map's outline is data, not a photograph).
  eleventyConfig.addFilter('photographs', (rows) => rows.filter((row) => row.basename !== 'map-india' && !own(row)));

  // Preview cards (src/site/_social/card.njk): one per page but the home page, named by the page's
  // whole path: /solutions/sickle-cell-anaemia/ → solutions-sickle-cell-anaemia.
  eleventyConfig.addFilter('socialSlug', (url) => url.replace(/^\/|\/$/g, '').replace(/\//g, '-'));
  eleventyConfig.addCollection('cardable', (api) =>
    api.getAll().filter((item) => item.url && item.url !== '/' && item.url.endsWith('/') && !item.data.eleventyExcludeFromCollections));

  // R1: a paragraph over 60 words is split into two at the sentence boundary that leaves the halves
  // most even, its words unchanged (a bio in team.json, About and Team). A full stop after a title
  // or an initial ("Dr.", "J.C.") does not end a sentence.
  const wordCount = (s) => s.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  eleventyConfig.addFilter('paragraphs', (paras = []) => paras.flatMap((p) => {
    if (wordCount(p) <= 60) return [p];
    let best = null;
    for (const m of p.matchAll(/[.?!]\s+(?=[A-Z])/g)) {
      const before = p.slice(0, m.index + 1);
      if (/(?:\b(?:Dr|Mr|Mrs|Ms|Prof|St|No)|\b[A-Z](?:\.[A-Z])*)\.$/.test(before)) continue;
      const worst = Math.max(wordCount(before), wordCount(p.slice(m.index + m[0].length)));
      if (!best || worst < best.worst) best = { worst, at: m.index + 1, next: m.index + m[0].length };
    }
    return best ? [p.slice(0, best.at), p.slice(best.next)] : [p];
  }));

  // The bracket rule (Global Constraints): a "[TBC: …]" or "[PLACEHOLDER: …]" note never renders.
  // unbracket strips it from a string and keeps the sentence before it; bracketless does that to
  // each entry of a list (to the entry's own key, when the entries are objects: a row's "body", a
  // chip's "text") and leaves out an entry that was only a bracket.
  const BRACKET = /\s*\[(?:TBC|PLACEHOLDER)\b[^\]]*\]/g;
  const unbracket = (s) => (typeof s === 'string' ? s.replace(BRACKET, '').trim() : s);
  eleventyConfig.addFilter('unbracket', unbracket);
  eleventyConfig.addFilter('bracketless', (list, key) => (list || [])
    .map((entry) => (key ? { ...entry, [key]: unbracket(entry[key]) } : unbracket(entry)))
    .filter((entry) => (key ? entry[key] : entry)));

  // A test page's closing ask (the controller's Phase 5 ruling 3): the email itself, so the
  // condition reaches the company with script off (Review Focus 5). The condition is named as
  // src/js/site/contact.js names it for the slug; an unknown slug stops the build.
  eleventyConfig.addFilter('askAbout', (slug, email) => {
    const name = CONDITIONS.get(slug);
    if (!name) throw new Error(`closing.solid.condition: no condition "${slug}" in src/js/site/contact.js`);
    return `mailto:${email}?subject=${encodeURIComponent('Request tests')}&body=${encodeURIComponent(`Condition: ${name}`)}`;
  });

  // A test page's required front matter (condition, test, who, closing): a page missing one stops
  // the build, naming the page and the key, instead of printing an empty heading or list.
  eleventyConfig.addFilter('required', (value, key, inputPath) => {
    if (value === undefined || value === null || value === '' || (typeof value === 'object' && !Object.keys(value).length)) {
      throw new Error(`${inputPath}: front matter "${key}" is required by test-page.njk`);
    }
    return value;
  });

  // The site's public pages, in address order: what the sitemap and llms.txt list and breadcrumbs
  // name. Drafts are never built; the 404 page (/404.html) and the preview cards are not pages of
  // their own address.
  eleventyConfig.addCollection('publicPages', (api) =>
    api.getAll().filter((item) => item.url && item.url.endsWith('/') && !item.url.startsWith('/_social/')).sort((a, b) => a.url.localeCompare(b.url)));
  // An inner page's BreadcrumbList items: Home, then each step of its own path that is a page with a
  // name (content 3.1, its front matter name). tests/seo.test.mjs pins every public page's name.
  eleventyConfig.addFilter('breadcrumbs', (items, url, domain) => {
    const crumbs = [{ url: '/', name: 'Home' }];
    let path = '/';
    for (const step of url.split('/').filter(Boolean)) {
      path += `${step}/`;
      const name = items.find((item) => item.url === path)?.data.name;
      if (name) crumbs.push({ url: path, name });
    }
    return crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: domain + c.url }));
  });
  // A sitemap's lastmod: the day, as YYYY-MM-DD.
  eleventyConfig.addFilter('isoDay', (date) => new Date(date).toISOString().slice(0, 10));

  // Analytics (decision D5): site.json's analytics is null, or { provider, token }. A provider is used
  // only once its token is set; it must count visits without cookies, since the site has no consent
  // banner. Cloudflare Web Analytics is the one provider so far; another name stops the build.
  const ANALYTICS = {
    cloudflare: { name: 'Cloudflare Web Analytics', src: 'https://static.cloudflareinsights.com/beacon.min.js', attrs: (token) => ({ 'data-cf-beacon': JSON.stringify({ token }) }) },
  };
  eleventyConfig.addFilter('analytics', (config) => {
    if (!config || !config.token) return null;
    const provider = ANALYTICS[config.provider];
    if (!provider) throw new Error(`site.json analytics: no provider "${config.provider}" (known: ${Object.keys(ANALYTICS).join(', ')})`);
    return { name: provider.name, src: provider.src, attrs: provider.attrs(config.token) };
  });

  eleventyConfig.setServerOptions({ port: 8080 });

  return {
    dir: { input: 'src/site', output: 'dist', includes: '_includes', data: '_data' },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
