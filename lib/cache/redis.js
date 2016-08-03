var redis = require('redis');
var client = null;

module.exports.connect = (config) => {
    if(!client) {
        client = redis.connect(config);
    }

    return client;
};