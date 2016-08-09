var mssql = require('mssql');

module.exports = {
    connection : null,
    connect : (info, cb) => {
        var config = {
            user: info.id,
            password: info.password,
            server: info.url,
            database: info.dbname
        };
        
        connection = new sql.Connection(config);
        connection.connect((err) => cb(err));
    },
    disconnect : (cb) => {
        if(connection != null) {
            connection.close();
        }
        
        connection = null;
    }

};
