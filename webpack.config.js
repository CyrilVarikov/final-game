const path = require('path');

module.exports = {
	mode: "development",
	entry: "./app/app.jsx",
	output:{
		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: "bundle.js"
	},
	module:{
		rules:[
			{
				test: /\.jsx/, 
				exclude: /(node_modules)/,
				loader: "babel-loader",
			},
			{
				test: /\.css/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}