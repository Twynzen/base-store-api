const express = require('express');
const UsersService = require('../services/usersService');
const router = express.Router();

const service = new UsersService;


//GET: parámetros query
//Con limit y offset http://localhost:3000/users?limit=10&offset=200

router.get('/', async(req, res, next) => {
    try {
        const users = await service.find();
        res.json(users);
    } catch (error) {
        next(error)
    }
})

router.get('/', (req, res) => {
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

module.exports = router;