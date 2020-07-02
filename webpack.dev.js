const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map', //'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'openseadragon-consolehook.js',
		library: 'openseadragon-consolehook',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	plugins: []
});
