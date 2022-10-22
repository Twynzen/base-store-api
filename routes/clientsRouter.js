const express = require('express');
const router = express.Router();
const ClientsService = require('../services/clientService');
const service = new ClientsService();
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema');


router.get('/', (req, res) => {
    const clients = service.find();
    res.json(clients);

});

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async(req, res) => {
        const { id } = req.params;
        const client = await service.findOne(id);
        res.json(client);
    })

module.exports = router;
