// var redis = require('redis');
var Redis = require('ioredis');

var client = null;

var Redis = require('ioredis');
var cache = function () {
    return {
        config: function (config) {
            console.log("redis init", config)
            client = new Redis({
                port: config.port,  // Redis port
                host: config.host,   // Redis host
                // name:"ava"
            });
        },

        put: function (cacheName, key, value, cb) {
            try {
                var str = JSON.stringify(value);
                // client.expire('string key', 3); set the expire time
                str = encodeURIComponent(str);
                client.hset(cacheName, key, str, cb);
            } catch (error) {
                console.log('error...', error);
            }

        },
        get: function (cacheName, key, cb) {
            client.hget(cacheName, key, function (err, reply) {
                if (err) {
                    return cb(null);
                }
                if (!reply) {
                    return cb(null);
                }
                var str = reply;
                try {
                    str = decodeURIComponent(reply);
                } catch (e) {
                    str = reply;
                }
                return cb(null, JSON.parse(str));
            });
        },
        clearCache: function (cache) {
            if (cache) {
                logger.logger().log('debug', '启动时清空%s的缓存', cache);
                client.del(cache);
            } else {
                client.keys('*', function (err, keys) {
                    if (!err) {
                        for (var i = 0, l = keys.length; i < l; i++) {
                            logger.logger().log('debug', 'key:%s', keys[i]);
                            client.del(keys[i]);
                        }
                    }
                });
            }
        },
        del: function (cacheName, key, cb) {
            client.hdel(cacheName, key, cb);
        }
    };
};
module.exports = cache();
