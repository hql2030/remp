var path = require('path')
var webpack = require('webpack')

var config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
       loaders: [
           {
               test: /\.css$/,
               loader: 'style-loader!css-loader'
           },
           {
               test: /\.less$/,
               loader: 'style-loader!css-loader!less-loader'
           },
           {
               test: /\.js$/,
               loader: 'babel-loader',
               query: {
                   presets: ['es2015', 'react'],
                   plugins: [
                       ["import", { libraryName: "antd", style: 'css' }], // `style: string:css/boolean:true` 会加载 css/less 文件
                       ["transform-class-properties", { "spec": true }]
                   ]
               },
               exclude: /node_modules/
           }
       ]
    },
    devServer: { 
        inline: true,
        port: 2030
    }
}

module.exports = config