//se crea libs para guardar conexiones a terceros. Son capa de librerias
const { Client } = require('pg');


async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'daniel',
        password: 'admin12345',
        database: 'store-api'
    })
    await client.connect();
    return client;
}
module.exports = getConnection;