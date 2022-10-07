const express = require('express');
const router = express.Router();

const ProductsService = require('../services/productService');
const service = new ProductsService();


router.get('/', (req, res) => {
    const products = service.find();
    res.json(products)

});
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
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

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);
    res.json(rta);
});


router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json({
        message: 'created',
        data: body
    });
});

module.exports = router;
