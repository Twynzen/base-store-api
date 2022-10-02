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
    res.json(
        [{
                name: 'producto1',
                price: 1000
            },
            {
                name: 'producto2',
                price: 3000
            }
        ]
    )
})
app.get('/products/:id', (req, res) => {
    //los {} funcionan para que de todos los parametros de req.paramas, solo recoja el id
    const { id } = req.params;

    res.json({
        id,
        name: 'producto1',
        price: 1000
    });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    })

})
app.get('/products/:id', (req, res) => {
    const { id } = req.params
    res.json({
        id,
        name: 'Videojuegos',
        price: 4000,
        available: true
    })
})

app.get('/categories/:id', (req, res) => {
    const { id } = req.params
    res.json({
        id,
        name: 'SillasGamer',
        products: 22
    })
})

app.get('/clients/:id', (req, res) => {
    const { id } = req.params
    res.json({
        id,
        firstName: 'Daniel',
        lastName: 'Castiblanco'
    })
})

app.listen(port, () => {
    console.log('Mi port ', port);
});
