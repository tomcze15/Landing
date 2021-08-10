const path = require('path');
const { addBabelPreset, addWebpackAlias, override } = require('customize-cra');

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
);
