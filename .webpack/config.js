const webpackMerge = require('webpack-merge');

const commonConfig = require('./common.config.js');

module.exports = ({ env, isFbinstant }) => {
  const envConfig = require(`./${env}.config.js`);

  const baseConfig = webpackMerge(commonConfig, envConfig);

  if(isFbinstant){
    const fbinstantConfig = require(`./fbinstant.config.js`);
    return webpackMerge(baseConfig, fbinstantConfig);
  }

  return baseConfig
};
