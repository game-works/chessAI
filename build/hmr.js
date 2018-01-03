let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let config = require('../config/webpack')();

module.exports = function (app, port) {
	config.entry.unshift('webpack-hot-middleware/client?reload=true');
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
	let compiler = webpack(config);

	// 热替换
	let HMR = webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			colors: true
		}
	});
	app.use(HMR);
	HMR.waitUntilValid(function () {
		console.log(`> Listening at http://localhost:${port}\n`);
	});

	// 即时更新
	var hotMiddleware = webpackHotMiddleware(compiler);
	app.use(hotMiddleware);
};