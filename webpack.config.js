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
				test: /\.jsx?$/, 
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options:{
					presets:["env", "react", "es2015", "stage-0"]
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [ 'url-loader?limit=10000', 'img-loader' ]
			}
		]
	}
}