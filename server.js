/**
 * Created by likaituan on 03/01/2018.
 */

let express = require('express');
let app = express();
app.use(express.static('./dist'));
let port = 2003;

let args = require('ifun').getArgs();
let useHmr = !args.env;
if (useHmr) {
	require('./build/hmr')(app, port);
}

app.listen(port, err => {
	if (err) {
		throw err;
	}
	console.log(`Start Node Server By http://localhost:${port}`);
});