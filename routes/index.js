const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const clientsRouter = require('./clientsRouter');

function routerApi(app) {
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/categories', categoriesRouter);
    app.use('/clients', clientsRouter);


}
module.exports = routerApi;
