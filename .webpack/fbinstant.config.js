const open = require('open');

module.exports = {
  mode: 'production',
  devServer: {
    after: async function() {
      await open(`https://www.facebook.com/embed/instantgames/${process.env.FB_APP_ID}/player?game_url=https://localhost:8080`);
    }
  }
}
