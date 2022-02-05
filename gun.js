const GUN = require("gun");

gun = GUN(["172.26.240.1", "20.204.139.208"]);

gun.get('bob').once(function(node){
    console.log('Bob!', node);
});