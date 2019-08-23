const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `${__dirname}/../src/index.tsx`,
  output: {
    path: `${__dirname}/../public`,
    filename: './app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: `${__dirname}/../fb/react-app-init.js`, to: `${__dirname}/../public/react-app-init.js` },
      { from: `${__dirname}/../fb/css/style.css`, to: `${__dirname}/../public/style.css` },
    ]),
  ]
}
