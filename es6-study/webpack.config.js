var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		// LetConst: './app/letConst.js',
		// Variable: './app/variable.js',
		// crossMod: './app/cross-mod.js',
		class: './app/class.js'
		// arr: './app/arr.js'
	},
	output: {
		path: __dirname + '/build/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
	// plugins: [commonsPlugin]
};