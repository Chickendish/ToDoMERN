var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
        port: 9000,
        compress: true,
        stats: "errors-only",
        open: true
    },
  module: {
  rules: [
    { test: /\.js$/, 
      exclude: /node_modules/, 
      use: "babel-loader" }
  ]
}
};
