let webpack = require('webpack');
let args = require('ifun').getArgs();
let useBabel = args.hasOwnProperty('babel') ? args.babel == 1 : true;
let useUglify = args.hasOwnProperty('uglify') ? args.uglify == 1 : true;
useUglify = useBabel && useUglify;
console.log({useBabel, useUglify});
let config = require('../config/webpack')({useBabel});

if (useBabel) {
	config.entry.unshift('babel-polyfill');
	config.module.rules.push({
		test: /\.js$/,
		loader: 'babel-loader',
		options: {
			presets: ['latest'],
			compact: true
		},
		/*
		include: [
			resolve('www'),
			resolve('config'),
			resolve('node_modules/ifun'),
			resolve('node_modules/seek-ajax'),
			resolve('node_modules/seekjs'),
			resolve('node_modules/xplayer'),
			'/github/seekjs/seek-ajax',
			'/github/seekjs/seekjs',
			'/github/likaituan/ifun',
			'/github/likaituan/xplayer'
		],
		*/
		exclude: [
			`${__dirname}/node_modules`
		]
	});
}

if (useUglify) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
				//  drop_debugger: true,
				//  drop_console: true
			},
			sourceMap: true
		})
	);
}

webpack(config, (err, stats) => {
	let options = {
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	};
	let text = stats.toString(options);
	process.stdout.write(`${text}\n\n`);
});