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

  eleventyConfig.setServerOptions({ port: 8080 });

  return {
    dir: { input: 'src/site', output: 'dist', includes: '_includes', data: '_data' },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
