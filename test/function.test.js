
let Redis = require('../lib/cache');
let expect = require('chai').expect;

describe('connection', function () {
    it('should emit "connect" when connected', function (done) {
        var redis = Redis.connect({});
        redis.on('connect', function () {
            redis.disconnect();
            done();
        });
    });
});

describe('set', function () {
    it('should set Object work', function (done) {
        var redis = Redis.connect({});
        redis.on('connect',  () => {
            let result =   redis.set('a',{a:1});
            result.then((result)=>{
                expect(result).equal('OK');
                done();
            });
           
        });
    });
});