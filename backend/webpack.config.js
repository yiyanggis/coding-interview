const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        host: `localhost`,
    },
	entry: {
	    server: './app.js',
	  },
	  output: {
	    path: path.join(__dirname, 'dist'),
	    publicPath: '/',
	    filename: 'server.js'
	  },
	  target: 'node',
	  node: {
	    // Need this when working with express, otherwise the build fails
	    __dirname: false,   // if you don't put this is, __dirname
	    __filename: false,  // and __filename return blank or /
	  },
	  externals: [nodeExternals()], // Need this to avoid error when working with Express
	module:{
		rules: [
			{
				test:/\.(js|jsx)$/,
				exclude: /node_modules/,
				use:{
					loader: "babel-loader"
				}
			},
			{
		        test: /\.html$/,
		        use: [
		          {
		            loader: "html-loader"
		          }
		        ]
		      }
		]

	},
	plugins: [
	    // new HtmlWebPackPlugin({
	    //   template: "./src/index.html",
	    //   filename: "./index.html"
	    // })
	]
}