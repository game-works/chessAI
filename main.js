seekjs.config({
	ns: {
		"util.": "/utils/"
	},
	alias:{
		ajax: "/utils/ajax.js"
	}	
});

var app = require("sys.app");

app.config({
	js: "/js/",
	tp: "/templates/"
});

app.usePlugin("seekjs-plugin-dialog",{display:false});

app.viewEx = {
	alert: function(...args){
		app.plugin.dialog.alert.apply(app.plugin.dialog, args);
	}
};

app.init("home");