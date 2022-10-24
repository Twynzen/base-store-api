// Para configurar entorno de desarrollo con buenas practicas npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -D
// Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
const express = require('express');
const routerApi = require('./routes'); //El archivo index se busca en automatico
const port = 3000;
const app = express();
const conn = require("express-myconnection");
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const cors = require('cors');

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3000",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.DB_NAME || "store-api"
}

//Sirve para que se habilite cualquier origen, sirve para apis publicas
// app.use(cors());

const whitelist = ['http://localhost:8888'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido loca mp'))
        }
    }
}
app.use(cors(options));


//midelware
app.use(express.json());
// Estos son los endPoints
app.get('/', (req, res) => {
    res.send('hola mi server en express')
});
//Así se crea una ruta
app.get('/nueva-ruta', (req, res) => {
    res.send('hola, soy una nueva ruta')
});

app.listen(port, () => {
    console.log('Mi port ', port);
});




//Podemos con estas rutas colocar jsons los datos que enviaremos

routerApi(app);
//Es importante ejecutar los middleware despues de el router Api
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
//Vamos a continuar con el curso de postgresql antes de hacer la subida a railway
// app.use(conn(postgresql))
