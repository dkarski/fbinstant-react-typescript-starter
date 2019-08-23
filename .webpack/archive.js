const webpackMerge = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const uuidv1 = require('uuid/v1');

const productionConfig = require(`./production.config.js`);
const commonConfig = require('./common.config.js');

const archiveConfig =  {
  plugins: [
    new ZipPlugin({
      path: `${__dirname}/../archives`,
      filename: `${uuidv1()}.zip`,
    })
  ]
};

module.exports = () => {
  return webpackMerge(commonConfig, productionConfig, archiveConfig);
};
