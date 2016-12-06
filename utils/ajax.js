var emit = require("util.emit");
//ajax.config = require("root.config");

var db_service = function(uri){
	return emit(uri, "db-service");
};

module.exports = {
	getFavList: db_service("getFavList"),
	addFav: db_service("addFav")
};