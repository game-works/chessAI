let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (options = {}) {
	return {
		entry: ['./src/main'],
		output: {
			path: `${__dirname}/../dist`,
			filename: 'app.js'
		},
		module: {
			rules: [
				{
					test: /\.sk$|\.html$|\.css$/,
					loader: 'seek-loader',
					options: {
						useBabel: options.useBabel
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: `${__dirname}/../src/index.html`,
				filename: 'index.html'
			})
		]
	};
};