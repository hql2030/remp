var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var port = 2030

var app = express()
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{
	noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/dist'))

app.listen(port, '0.0.0.0', function(err){
	if(err){
		console.log(err)
		return
	}
	console.log('Listening at http://localhost:'+port)
})
