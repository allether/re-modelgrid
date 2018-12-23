var webpack = require("webpack");
var path = require("path");
var cfg = {
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.coffee$/, use: "coffee-loader"},
			{ test: /\.(xml|html|txt|md|glsl|svg)$/, loader: "raw-loader" },
			{ test: /\.(less)$/, exclude: /^(https?:)?\/\//,use: ['style-loader',{loader:'css-loader',options: {
			    modules: true,
			    // importLoaders: 1,
			    localIdentName: 'lui-[hash:base64:5]'
			  }},'less-loader'] },
			{ test: /\.(css)$/, exclude: /^(https?:)?\/\//, use: ['style-loader','css-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|png)$/,loader: 'url-loader?limit=65000' }
		]
	},
	entry: {
		index: "./components/index.coffee",
	},
	resolve: {
		extensions: [ '.js', '.coffee' ]
	},
	externals: ["re-lui","react-dom","react","classnames","color","re-slide","react-json-view","react-virtualized/dist/commonjs/MultiGrid","react-virtualized/dist/commonjs/List","react-virtualized/dist/commonjs/CellMeasurer"],
	output: {
		path: path.join(__dirname,'..','/dist'),
		publicPath: '/',
		filename: "index.js",
		libraryTarget: 'commonjs2'
	}
}
module.exports = cfg;