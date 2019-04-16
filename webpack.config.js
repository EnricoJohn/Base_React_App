const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',  
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader',
      },
    ]},
    plugins: [
      new HtmlWebPackPlugin({
          template: './public/index.html',
          filename: './index.html'
      })
    ]
}
/*
  module: {
    rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader:'babel-loader'   
            }  
        ]
    },
*/