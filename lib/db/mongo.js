var mongoose = require('mongoose');

module.exports = {
    connection : null,
    connect : (url) => {
        if(this.connection) {
            return this.connection;
        }

        this.connection = mongoose.connect(url);
    },
    disconnect : () => {

        if(this.connection) {
            this.connection.disconnect();
        }

        this.connection = null;

    }
};
