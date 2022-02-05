import Relays from 'gun-relays'
import Gun from 'gun'

let relays = await Relays()

console.log(relays)

// Use the relays
let gun = new Gun({peers: relays});

gun.get('aaaa').put({name: "aaaa"});

// while()
gun.get('bbbb').on((node) => console.log("bbbb", node));