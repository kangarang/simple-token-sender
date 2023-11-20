const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we using in here for aliases in project.
 */
module.exports = createWebpackAliases({
  abis: 'src/abis',
  assets: 'src/assets',
  components: 'src/components',
  constants: 'src/constants',
  contexts: 'src/contexts',
  entities: 'src/entities',
  hooks: 'src/hooks',
  pages: 'src/pages',
  styles: 'src/styles',
  types: 'src/types',
  utils: 'src/utils',
});
