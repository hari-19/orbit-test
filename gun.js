const GUN = require("gun");

gun = GUN(["172.26.240.1", "20.204.139.208"]);

alice.on(function(node){
    console.log('Subscribed to Alice!', node);
});

gun.get('bob').once(function(node){
    console.log('Bob!', node);
});