var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
  rules: [
    { test: /\.js$/, 
      exclude: /node_modules/, 
      use: "babel-loader" }
  ]
}
};
