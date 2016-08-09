# node-jutil

[![NPM Version][npm-image]][npm-url] [![Join the chat at https://gitter.im/devjin0617/node-jutil](https://badges.gitter.im/devjin0617/node-jutil.svg)](https://gitter.im/devjin0617/node-jutil?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

it's my util collection

## how to install

```
npm i node-jutil --save
```

## how to use

1. npm install to node-jutil

2. require to node-jutil

```javascript
var jutil = require('node-jutil');
```

3. call to util

#### db

- mongodb

```javascript
jutil.db.mongo.connect('mongo://url.to/dbname');
```

- mysql

```javascript
jutil.db.mysql.connect({
    host : 'url'
    user : 'username',
    password : 'password',
    database : 'db name'
}, (err) => {
    if(err) {
        console.log(err);
        return;
    }

});
```

- mssql

```javascript
jutil.db.mssql.connect({
    user: 'id',
    password: 'password',
    server: 'url',
    database: 'db name'
}, (err) => {
    if(err) {
        console.log(err);
        return;
    }

});
```

#### cache

- redis

```javascript
jutil.cache.redis.connect('url');
```

#### crypto

- crypto

```javascript
var crypto = jutil.crypto;

var strMD5 = crypto.md5('helloworld');

var strSHA1 = crypto.sha1('hellworld');

var strSHA256 = crypto.sha256('helloworld');

var strSHA512 = crypto.sha512('helloworld');
```

#### networking

- net

```javascript
jutil.net.http({
    // option..
}, (err, res, body) => {
    // result code..
});
```

#### logger

- log

```javascript
var jconsole = jutil.log;

jconsole.log('hello world');

jconsole.trace('hello world');

jconsole.debug('hello world');

jconsole.info('hello world');

jconsole.warn('hello world');

jconsole.error('hello world');

jconsole.fatal('hello world');
```



[npm-image]: https://img.shields.io/badge/npm-v0.0.2-blue.svg
[npm-url]: https://www.npmjs.com/package/node-jdate