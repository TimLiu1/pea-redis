redis.config({});

setTimeout( async () => {
 await redis.hset('test','map',{name:'a'});
let hget = await redis.hget('test','map');
console.log('hget',hget);


 await redis.set('a','b');
let get = await redis.get('a');
console.log('get',get);
},3000)


