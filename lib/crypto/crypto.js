var crypto = require('crypto');

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

function sha1(str) {
    return crypto.createHash('sha1').update(str).digest('hex');
}

function sha256(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}

function sha512(str) {
    return crypto.createHash('sha512').update(str).digest('hex');
}

module.exports = {
    md5 : md5,
    sha1 : sha1,
    sha256 : sha256,
    sha512 : sha512
};
