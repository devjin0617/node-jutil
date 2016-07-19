var request = require('request');

var option = {
    type : 'get',
    url : '',
    params : {},
    dataType : 'json'
};

function http(opt, cb) {

    if(!opt.type) {
        opt.type = option.type;
    }

    if(!opt.params) {
        opt.params = {};
    }

    request(opt, function(err, res, body) {
        cb(err, res, body);
    });
    
}


module.exports = {
    http : http
};