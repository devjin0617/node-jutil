var jutil = require('../index');

var assert = require('chai').assert;

describe('node-jutil mocha test', () => {

    describe('DB Connection test', () => {

        it('it is pass', () => {

        });

    });

    describe('crypto test' , () => {

        it('MD5 test', () => {

            // 1234 → 81dc9bdb52d04dc20036dbd8313ed055
            assert.equal('81dc9bdb52d04dc20036dbd8313ed055', jutil.crypto.md5('1234'));

        });

        it('SHA1 test', () => {

            // 1234 → 7110eda4d09e062aa5e4a390b0a572ac0d2c0220
            assert.equal('7110eda4d09e062aa5e4a390b0a572ac0d2c0220', jutil.crypto.sha1('1234'))

        });

        it('SHA256 test', () => {

            // 1234 → 03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4
            assert.equal('03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', jutil.crypto.sha256('1234'));

        });

    });

});