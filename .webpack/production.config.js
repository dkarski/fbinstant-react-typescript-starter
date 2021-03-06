const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv').config({ path: `${__dirname}/../.env`})

module.exports = {
  mode: 'production',
  devServer: {
    contentBase: `${__dirname}/../public`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      fb: "https://www.facebook.com/assets.php/en_US/fbinstant.latest.js",
      template: `${__dirname}/../src/index.html`
    }),
    new CopyPlugin([
      { from: `${__dirname}/../fb/fbapp-config.json`, to: `${__dirname}/../public/fbapp-config.json` },
    ]),
  ]
}
