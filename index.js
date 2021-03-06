
function test() {
    return 'test';
}

module.exports = {
    test : test,
    db : {
        mongo : require('./lib/db/mongo'),
        mysql : require('./lib/db/mysql'),
        mssql : require('./lib/db/mssql')
    },
    cache : {
        redis : require('./lib/cache/redis')
    },
    crypto : require('./lib/crypto/crypto'),
    net : require('./lib/net/net'),
    log : require('./lib/log/log')
};