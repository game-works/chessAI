var ajax = require("ajax");

exports.list = {
	data:[]
};

exports.form = {
	ti: "",
	url: ""
};

exports.onInit = function(done){
	ajax.getFavList(this.list, done);
};

exports.addFav = function(){
	ajax.addFav(this.form, rs=>{
		if(rs.success){
			//this.form.ti = "";
			//this.form.url = "";
			this.render();
			this.alert("add fav success!");
		}else{
			this.alert(rs.message);
		}
	});
};