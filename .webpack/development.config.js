const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: `${__dirname}/../public`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      fb: "/fbinstant.6.2.mock.js",
      template: `${__dirname}/../src/index.html`
    }),
    new CopyPlugin([
      { from: `${__dirname}/../fb/fbinstant.6.2.mock.js`, to: `${__dirname}/../public/fbinstant.6.2.mock.js` },
      { from: `${__dirname}/../fb/css/mock/mock.css`, to: `${__dirname}/../public/mock.css` },
    ]),
  ]
}
