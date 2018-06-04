
[![npm package](https://badge.fury.io/js/pea-redis.svg)](https://www.npmjs.com/package/pea-redis)


# Features
Pea-redis is based on ioredis, it support async/await usage,it's a further encapsulated and functionally extended functional class. Based on the basic functions of ioredis, it adds operations on objects, and hash, making it easier for Nodejs developers to operate redis.

1. set/get hset/hget Object into/from redis, easy for Nodejs developer to use
2. it support async/await usage


# Quick Start
## Install
```shell
$ npm i pea-redis
```




## Basic Usage

### set/get Object
```javascript
(async () => {
await peaRedis.set('a',{'a':1});
const a = await peaRedis.get('a'); // a = {'a':1} 
})();

```
### set/get Value
```javascript
(async () => {
 await peaReids.setValue('b', 'this is string');
const c = await peaReids.getValue('b'); // b = this is string;
})();
```

### hset/hget Object
```javascript
(async () => {
await peaRedis.hset('c','c',{c:1});
const b = await peaRedis.hget('c', 'c'); // c = {c:1}
})();
```

### hset/hget Value
```javascript
(async () => {
await peaRedis.hsetValue('d','d','d');
const b = await peaRedis.hgetValue('d', 'd'); // d
})();

```


If you want to delete some cache in the redis, it's more easier than ioredis

For example:

```javascript

await hdel('obj', 'b');

await del('a');

```

If you want to use the native method of ioredis, you only need to get the ioredis object and then you can use any ioredis method which you want

For example:

```javascript

// get ioredis object
const ioRedis = peaRedis.getRedis();

// you can use the native method of ioredis through ioRedis object
ioRedis.set('foo', 'bar');
ioRedis.get('foo', function (err, result) {
  console.log(result);
});

...

```

see more ioRedis function through: https://github.com/luin/ioredis

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

# Join in!

I'm happy to receive bug reports, fixes, documentation enhancements, and any other improvements.

And since I'm not a native English speaker, if you find any grammar mistakes in the documentation, please also let me know. :)

# Contributors
<table><tr><td width="20%"><a href="https://github.com/TimLiu1"><img src="https://avatars2.githubusercontent.com/u/16770736?s=460&v=4" /></a><p align="center">TimLiu1</p></td><td width="20%"><a href="https://github.com/InCodingNowLiu"><img src="https://avatars0.githubusercontent.com/u/31758568?s=460&v=4" /></a><p align="center">InCodingNowLiu</p></td></tr></table>

# License

MIT