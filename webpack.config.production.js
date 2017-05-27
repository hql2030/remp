var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('style/style-css.css')
var extractLESS = new ExtractTextPlugin('style/style-less.css')

var config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
       rules: [
           {
               test: /\.css$/,
               use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
           },
           {
               test: /\.less$/,
               use: extractLESS.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'less-loader']
               })
           },
           {
               test: /\.js$/,
		           loader: "babel-loader",
               include: path.join(__dirname, 'src'),
               exclude: [
				           path.resolve(__dirname, "node_modules")
				       ]
           },
           {
               test: /\.(png|jpg|gif|svg)$/,
               loader: 'url-loader?limit=12192&name=html/img/[name].[hash:5].[ext]'
           }
       ]
    },
    plugins:[
      new HtmlWebpackPlugin({
          title: 'REMP',
          filename: 'index.html',
          template: './src/template.html',
          inject: 'body',
          hash: true
      }),
      extractCSS,
      extractLESS
    ],
    resolve: {
        alias: {
          'create-reducer': path.resolve(__dirname, 'src/utils/create-reducer.js')
        }
    }
}

module.exports = config