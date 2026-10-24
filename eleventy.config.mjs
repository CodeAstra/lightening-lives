// Eleventy builds the pages from src/site into dist/. Everything in src/assets (the logo, pictures,
// type, and the stylesheet and scripts that scripts/build.mjs compiles) is copied to dist/assets.
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
  // map's outline where the page draws the map.
  eleventyConfig.addFilter('creditsFor', (rows, html = '') =>
    rows.filter((row) => (row.basename === 'map-india' ? /\sdata-map[\s>]/.test(html) : html.includes(`/assets/img/${row.basename}-`))));

  // The rows that are photographs (the map's outline is data, not a photograph).
  eleventyConfig.addFilter('photographs', (rows) => rows.filter((row) => row.basename !== 'map-india'));

  // Preview cards (src/site/_social/card.njk): one per page but the home page, named by the page's
  // whole path: /solutions/sickle-cell-anaemia/ → solutions-sickle-cell-anaemia.
  eleventyConfig.addFilter('socialSlug', (url) => url.replace(/^\/|\/$/g, '').replace(/\//g, '-'));
  eleventyConfig.addCollection('cardable', (api) =>
    api.getAll().filter((item) => item.url && item.url !== '/' && item.url.endsWith('/') && !item.data.eleventyExcludeFromCollections));

  eleventyConfig.setServerOptions({ port: 8080 });

  return {
    dir: { input: 'src/site', output: 'dist', includes: '_includes', data: '_data' },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
