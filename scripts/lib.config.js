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
			{ test: /\.coffee$/, use: [{
				loader: 'string-replace-loader',
				options: {
					search: 'cn:',
					replace: 'className:',
					flags: 'g'
				}
			},"coffee-loader"]},
			{ test: /\.(xml|html|txt|md|glsl|svg)$/, loader: "raw-loader" },
			{ test: /\.(less)$/, exclude: /^(https?:)?\/\//,use: ['style-loader',{loader:'css-loader',options: {
			    modules:{
			    	localIdentName: 'lui-g-[local]'
				}
			  }},{
			  	loader: 'less-loader',
			  	options: {
			  		modifyVars: {
			  			"dim": process.env.DIM+"px"
			  		}
			  	}
			  }] },
			{ test: /\.(css)$/, exclude: /^(https?:)?\/\//, use: [{loader: MiniCssExtractPlugin.loader},'css-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|png)$/,loader: 'url-loader?limit=65000' }
		]
	},
	entry: {
		index: "./components/ModelGrid.coffee",
	},
	resolve: {
		extensions: [ '.js', '.coffee' ]
	},
	externals: ["date-fns","re-lui","react-dom","hotkeys-js","react","lodash","classnames","color","re-slide","react-json-view","react-virtualized/dist/commonjs/MultiGrid","react-virtualized/dist/commonjs/List","react-virtualized/dist/commonjs/CellMeasurer"],
	output: {
		filename: "re-modelgrid.js",
		libraryTarget: 'commonjs2'
	},
	plugins:[extract_css]
}
module.exports = cfg;