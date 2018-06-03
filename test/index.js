let redis = require('../lib/cache');
redis.connect({});

setTimeout( async () => {
    /*eslint no-console: */
    try {
       
        await redis.set('a',{'a':1});
        let get = await redis.get('a');
        console.log('get:a',get);


        await redis.hset('obj','b',{b:1});
        let hget = await redis.hget('obj','b');
        console.log('hget:b',hget); 

        await redis.setValue('c','c');
        let getValue = await redis.getValue('c');
        console.log('getValue:a',getValue);

        await redis.hsetValue('hsetValue','d','d');
        let hgetValue = await redis.hgetValue('hsetValue','d');
        console.log('hgetValue:a',hgetValue);
    } catch (error) {
        console.log('err:',error.toString);
    }
 
},3000);


