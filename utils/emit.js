var ajax = require("sys.ajax");

module.exports = function(method, path){
    path = path || "service";
    return function (params, callback) {
        ajax({
            url: `/${path}/${method}`,
            data: params,
            dataType: "json",
            success: function (json) {
                if (params.data && json.data) {
                    params.data = json.data;
                }
                log({params, json});
                callback(json);
            }
        });
    };
};