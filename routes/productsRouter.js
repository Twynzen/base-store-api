const express = require('express');
const router = express.Router();
//npm i faker@5.5.3 -S
const faker = require('../node_modules/faker');


router.get('/', (req, res) => {
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
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});
router.get('/:id', (req, res) => {
    //los {} funcionan para que de todos los parametros de req.paramas, solo recoja el id
    const { id } = req.params;

    res.json({
        id,
        name: 'producto1',
        price: 1000
    });
});
//Evitar choques entre endpoints, todo esta en el orden de ejecución de los endpoints

router.get('/:id', (req, res) => {
    const { id } = req.params
    res.json({
        id,
        name: 'Videojuegos',
        price: 4000,
        available: true
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
})

module.exports = router;
