const express = require('express');
const router = express.Router();
const ClientsService = require('../services/clientService');
const service = new ClientsService();

router.get('/', (req, res) => {
    const clients = service.find();
    res.json(clients)

});

router.get('/:id', (req, res) => {
    const { id } = req.params
    const client = service.findOne(id);
    res.json(client);
})

module.exports = router;
