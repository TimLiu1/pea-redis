
[![npm package](https://badge.fury.io/js/pea-redis.svg)](https://www.npmjs.com/package/pea-redis)


# Features
Pea-redis is based on ioredis, it support async/await usage,it's a further encapsulated and functionally extended functional class. Based on the basic functions of ioredis, it adds operations on objects, and hash, making it easier for Nodejs developers to operate redis.

0. set/get Object into/from redis, easy for Nodejs developer to use
1. hash set and hash get more easy, only one line of code


# Quick Start
## Install
```shell
$ npm i pea-redis
```




## Basic Usage

```javascript

const peaRedis = require('pea-redis');

peaRedis.connect({}); //see the detail config of ioredis

// set object to the redis
await peaRedis.set('a',{'a':1});

// hash set object to the redis 
await peaRedis.hset('obj','b',{b:1});

// set string to the redis
await peaReids.setValue('c', 'this is string');

// get object from the redis 
const a = await peaRedis.get('a'); // a = {'a':1}

// hash get object from the redis
const b = await peaRedis.hget('obj', 'b'); // b = {b:1}

// get value from the redis
const c = await peaReids.getValue('c'); // c = this is string;

```

If you want to delete some cache in the redis, it's more easier than ioredis

For example:

```javascript

await hdel('obj', 'b');

await del('a');

```

# Function and params Details:


0. connect to the redis
```javascript

//set up your redis config, port, host, db, password, name, if you do not set up config, it will set default config 
connect: function ({config, port, host, db, password, name}){}
//for example
peaRedis.connect({
    port: 6379,
    host: '127.0.0.1',
    db: 'test',
    password: 'test',
    name: 'test'
})

``` 

1. set object to the redis

```javascript

//this only support object type
set: async function () {}

``` 

2. get value from redis

```javascript

//this only support String type
get: async function (key) {}

``` 

3. hash set object to redis 

```javascript

//this only support object type
hset: async function (cacheName, key, value) {}

``` 

4. get object from redis

```javascript

hget: async function (cacheName, key) {}

``` 

5. set string type to redis

```javascript

//this only support string type
setValue: async function (key, value) {}

``` 

6. get value from redis

```javascript

getValue: async function (key) {}

``` 

7. hash set string type to redis

```javascript

//this only support string type
hsetValue: async function (cacheName, key, value) {}

``` 

8. hash get value from redis

```javascript

hgetValue: async function (cacheName, key) {}

``` 

9. hash delete value from redis

```javascript

hgetValue: async function (cacheName, key) {}

``` 

10. delete value from redis

```javascript

 del: async function (key) {}

``` 

# Join in!

I'm happy to receive bug reports, fixes, documentation enhancements, and any other improvements.

And since I'm not a native English speaker, if you find any grammar mistakes in the documentation, please also let me know. :)

# Contributors
