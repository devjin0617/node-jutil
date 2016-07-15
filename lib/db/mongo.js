var mongoose = require('mongoose');

module.exports = {
    connection : null,
    connect : function(url) {
        if(this.connection) {
            return this.connection;
        }

        this.connection = mongoose.connect(url);
    },
    disconnect : function() {

        if(this.connection) {
            this.connection.disconnect();
        }

        this.connection = null;

    }
};