
function test() {
    return 'test';
}

module.exports = {
    test : test,
    db : {
        mongo : require('./lib/db/mongo'),
        mysql : require('./lib/db/mysql'),
        mssql : require('./lib/db/mssql')
    }
};