/*
 * create an orbitDB key-value database of pet animals
 * July 2021 - (c) Vu Tien Khang - Machu Picchu
 */
// import the packages
const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

async function main () {
    const ipfsOptions = {   };    // placeholder
    const ipfs = await IPFS.create(ipfsOptions);
    console.log('-> IPFS node connected');
    const orbitdb = await OrbitDB.createInstance(ipfs);
    console.log('-> OrbitDB instance created');
    
    // First stage, create and populate database with 2 key-value pairs
    // in OrbitDB, 1 key-value database = 1 pet
    const db1 = await orbitdb.keyvalue('pet-animal');
    await db1.put('species', 'German Shepherd', { pin: true });
    await db1.put('owner', 'myself', { pin: true });
    console.log('-> One pet animal created');
    console.log(db1.address.toString())
    await db1.close();
    
    // 2nd stage, reopen and retrieve from the database
    const db2 = await orbitdb.keyvalue('pet-animal');
    await db2.load();
    console.log(db2.address.toString())
    let species = db2.get('species');
    console.log(' -> database value of "species" = ', species);
    let owner = db2.get('owner');
    console.log(' -> database value of "owner" = ', owner);
    await db2.close();
}
main();