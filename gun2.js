import Relays from 'gun-relays'
import Gun from 'gun'

let relays = await Relays()

console.log(relays)

// Use the relays
let gun = new Gun({peers: relays});

gun.get('aaaaa').put({name: "aaaaa"});

// while()
gun.get('bbbbb').on((node) => console.log("bbbbb", node));