const webpackMerge = require('webpack-merge');
const open = require('open');

const productionConfig = require(`./production.config.js`);
const commonConfig = require('./common.config.js');

module.exports = () => {
  return webpackMerge(commonConfig, productionConfig, {
    devServer: {
      after: async function() {
        await open(
          `https://www.facebook.com/embed/instantgames/${process.env.FB_APP_ID}/player?game_url=https://localhost:8080`,
        );
      },
    },
  });
};
