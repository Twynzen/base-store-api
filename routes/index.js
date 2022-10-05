const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const clientsRouter = require('./clientsRouter');

function routerApi(app) {
    //Creamos una ruta maestra para verisones futuras y mantenimiento
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/clients', clientsRouter);


}
module.exports = routerApi;
