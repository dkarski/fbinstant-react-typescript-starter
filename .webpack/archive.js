const webpackMerge = require('webpack-merge');
const ZipPlugin = require('zip-webpack-plugin');
const uuidv1 = require('uuid/v1');

const productionConfig = require(`./production.config.js`);
const commonConfig = require('./common.config.js');

module.exports = () => {
  return webpackMerge(commonConfig, productionConfig, {
    plugins: [
      new ZipPlugin({
        path: `${__dirname}/../archives`,
        filename: process.env.UUID ? `${process.env.UUID}.zip` : `${uuidv1()}.zip`,
      }),
    ],
  });
};
