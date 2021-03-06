var webpack = require("webpack");
var path = require("path");
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
			{ test: /\.(css)$/, exclude: /^(https?:)?\/\//, use: ['style-loader','css-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|png)$/,loader: 'url-loader?limit=65000' }
		]
	},
	entry: {
		demo: "./demo.coffee"
	},
	resolve: {
		extensions: [ '.js', '.coffee' ],
		
	},
	output: {
		path: path.join(__dirname,'..','/dist'),
		publicPath: '/dist',
		filename: "demo.js",
	},
	devServer: {
		port: 3235
	}
}
module.exports = cfg;