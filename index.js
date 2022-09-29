// Para configurar entorno de desarrollo con buenas practicas npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -D

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hola mi server en express')
})

app.listen(port, () => {
    console.log('Mi port ', port);
});
