const boom = require('@hapi/boom');

//Aquí se tiene un caso de uso de un clousure
function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        /*
        req.body
        req.params
        req.query
        */

        //abortEarly sirve para encontrar todos los errores y mostrarlos en la petición
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }

}

module.exports = validatorHandler;
