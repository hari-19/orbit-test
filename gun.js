const GUN = require("gun");

gun = GUN();

alice = gun.get('alice').put({name: 'alice', age: 22});
bob = gun.get('bob').put({name: 'bob', age: 24});

gun.get('bob').once(function(node){
    console.log('Bob!', node);
});