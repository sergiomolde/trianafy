import express from 'express';
import "dotenv/config";

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
    console.log('Iniciando TrianaFy por el puerto 9000');
});

