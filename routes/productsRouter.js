const { response } = require('express');
const express = require('express');
const router = express.Router();

const ProductsService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema');


const service = new ProductsService();


router.get('/', async(req, res) => {
    const products = await service.find();
    res.json(products);

});
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.findOne(id);
            res.json(product);
        } catch (error) {
            next(error);
        }
    });

// router.get('/:id', (req, res) => {
//los {} funcionan para que de todos los parametros de req.paramas, solo recoja el id
//     const { id } = req.params;

//     res.json({
//         id,
//         name: 'producto1',
//         price: 1000
//     });
// });
//Evitar choques entre endpoints, todo esta en el orden de ejecución de los endpoints

// router.get('/:id', (req, res) => {
//     try {
//         const { id } = req.params;
//         res.json({
//             id,
//             name: 'Videojuegos',
//             price: 4000,
//             available: true
//         });
//     } catch (error) {
//         next(error);
//     }
// });

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async(req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            res.json(product);
        } catch (error) {
            // res.status(404).json({
            //     message: error.message
            // });
            next(error);
        }

    });
router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});


router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json(newProduct);
    });

module.exports = router;
