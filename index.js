// Para configurar entorno de desarrollo con buenas practicas npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -D

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
        res.send('hola mi server en express')
    })
    //Así se crea una ruta
app.get('/nueva-ruta', (req, res) => {
        res.send('hola, soy una nueva ruta')
    })
    //Podemos con estas rutas colocar jsons los datos que enviaremos
app.get('/products', (req, res) => {
    res.json({
        name: 'producto1',
        price: 1000
    })
})

app.listen(port, () => {
    console.log('Mi port ', port);
});
