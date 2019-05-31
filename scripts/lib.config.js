var webpack = require("webpack");
var path = require('path');
var fs = require('fs');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var extract_css = new MiniCssExtractPlugin({
	filename: "re-modelgrid.css",
	chunkFilename: "re-modelgrid-[id].css"
})


var cfg = {
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.coffee$/, use: "coffee-loader"},
			{ test: /\.(xml|html|txt|md|glsl|svg)$/, loader: "raw-loader" },
			{ test: /\.(less)$/, exclude: /^(https?:)?\/\//,use: ['style-loader',{loader:'css-loader',options: {
			    modules: true,
			    // importLoaders: 1,
			    localIdentName: 'lui-g-[local]'
			  }},'less-loader'] },
			{ test: /\.(css)$/, exclude: /^(https?:)?\/\//, use: [{loader: MiniCssExtractPlugin.loader},'css-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|png)$/,loader: 'url-loader?limit=65000' }
		]
	},
	entry: {
		index: "./components/index.coffee",
	},
	resolve: {
		extensions: [ '.js', '.coffee' ]
	},
	externals: ["dayjs","re-lui","react-dom","react","classnames","color","re-slide","react-json-view","react-virtualized/dist/commonjs/MultiGrid","react-virtualized/dist/commonjs/List","react-virtualized/dist/commonjs/CellMeasurer"],
	output: {
		filename: "re-modelgrid.js",
		libraryTarget: 'commonjs2'
	},
	plugins:[extract_css]
}
module.exports = cfg;