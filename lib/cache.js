// var redis = require('redis');
var Redis = require('ioredis');

var client = null;

var Redis = require('ioredis');
var cache = function () {
    return {
        connect: function (config) {
            client = new Redis({
                port: config.port || 6379,  // Redis port
                host: config.host || '127.0.0.1',   // Redis host
                db: config.db || 0,
                password: config.password || ''
                // name:"ava"
            });
            return client;
        },
        set: async function () {
            try {
                if (arguments.length !== 2) {
                    throw 'arguments error'
                }
                let key = arguments[0], value = arguments[1];
                if (typeof value !== 'object') {
                    throw ' this way just support object'
                }
                value = JSON.stringify(value);
                value = encodeURIComponent(value);
                let result = await client.set(key, value);
                return result;
            } catch (error) {
                console.log(error.stack);
                throw error;
            }

        },
        get: async function (key) {
            if (!key) {
                throw 'key error'
            }
            if (typeof arguments[0] !== 'string') {
                throw ' this way just support string'
            }
            let result =  await client.get(key);
            try {
                result = decodeURIComponent(result);
            } catch (e) {
                result = result;
            }
            return JSON.parse(result);
        },
        hset: async function (cacheName, key, value) {
            try {
                if (typeof value !== 'object') {
                    throw ' this way just support object'
                }
                var str = JSON.stringify(value);
                // client.expire('string key', 3); set the expire time
                str = encodeURIComponent(str);
                let result = await client.hset(cacheName, key, str);
                return result;
            } catch (error) {
                console.log(error.stack);
                throw error;
            }

        },

        hget: async function (cacheName, key) {
            let replay, result;
            replay = await client.hget(cacheName, key);
            try {
                result = decodeURIComponent(replay);
            } catch (e) {
                result = replay;
            }
            return JSON.parse(result);
        },
        hdel: async function (cacheName, key) {
            let result = await client.hdel(cacheName, key);
        },
        del: async function (key) {
            let result = await client.del(key);
        },
        getRedis: () => {
            return client;
        }
    };
};
module.exports = cache();
