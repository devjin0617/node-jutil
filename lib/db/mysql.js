var mysql = require('mysql');


module.exports = {
    connection : null,
    connect : (info, cb) => {
        var config = {
            host : info.url || '',
            user : info.id || '',
            password : info.password || '',
            database : info.dbname || ''
        };
        
        connection = mysql.createConnection(info);
        connection.connect((err) => cb(err));
        
    
    },
    disconnect : (cb) => {
        if(connection != null) {
            connection.end((err) => cb(err));
        }
        
        connection = null;
    
    }
};

