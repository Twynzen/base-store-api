// Para configurar entorno de desarrollo con buenas practicas npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -D
// Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
const express = require('express');
const faker = require('./node_modules/faker');

const app = express();
const port = 3000;


//Estos son los endPoints
app.get('/', (req, res) => {
        res.send('hola mi server en express')
    })
    //Así se crea una ruta
app.get('/nueva-ruta', (req, res) => {
        res.send('hola, soy una nueva ruta')
    })
    //Podemos con estas rutas colocar jsons los datos que enviaremos
app.get('/products', (req, res) => {
    const products = [];
    const { size } = req.query;

    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
            //Faker buenisimo para crear data falsa
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    res.json(products)

    // res.json(
    //     [{
    //             name: 'producto1',
    //             price: 1000
    //         },
    //         {
    //             name: 'producto2',
    //             price: 3000
    //         }
    //     ]
    // )
});
app.get('/products/filter', (req, res) => {
    res.send('Yo soy un filter');
});
app.get('/products/:id', (req, res) => {
    //los {} funcionan para que de todos los parametros de req.paramas, solo recoja el id
    const { id } = req.params;

    res.json({
        id,
        name: 'producto1',
        price: 1000
    });
});
//Evitar choques entre endpoints, todo esta en el orden de ejecución de los endpoints
// app.get('/products/filter', (req, res) => {
//     res.send('Yo soy un filter');
// })

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
    });
});



//GET: parámetros query
//Con limit y offset http://localhost:3000/users?limit=10&offset=200
app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send('No hay parametros');
    }
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
