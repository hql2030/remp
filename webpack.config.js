var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    devtool: '#cheap-module-source-map',
    entry: {
        index: ['webpack-hot-middleware/client', './src/index.js']
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
               loader: 'style-loader!css-loader'	
           },
           {
               test: /\.less$/,
               loader: 'style-loader!css-loader?module&localIdentName=[local]-[hash:base64:5]!less-loader'
           },
           {   
               test: /\.js$/, 
               enforce: 'pre', // 加载前先校验语法格式
               loader: 'eslint-loader', 
               exclude: /node_modules/
           },
           {
               test: /\.js$/,
		           loader: "babel-loader?cacheDirectory",
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
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
          title: 'REMP',
          filename: 'index.html',
          template: './src/template.html',
          inject: 'body',
          hash: true
      })
    ],
    resolve: {
        alias: {
          'create-reducer': path.resolve(__dirname, 'src/utils/create-reducer.js')
        }
    }
}

module.exports = config