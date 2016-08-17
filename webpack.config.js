var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './docs/index.js',
	output: {
		path: './build',
		publicPath: '/',
		filename: 'build-docs.js'
	},
	resolve: {
		root: path.resolve('./'),
		extensions: ['', '.js', '.css', '.vue', 'less', '.json']
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [
			{
				test: /\.vue$/, 
				loader: 'vue',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	devtool: 'source-map',
	plugins: [
		new HtmlwebpackPlugin({
			filename: 'index.html',
			template: './docs/index.html'
		})
	]
}
