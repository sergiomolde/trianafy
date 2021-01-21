import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose";
import user from './routes/user';


// Imports de componentes del API
import models from './models';
const app = express();

app.use(morgan('dev'));
morganBody(app)
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    req.context = {
        models,
    };
    next();
});

app.use('/', user)

mongoose.connect(process.env.URIDB, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  
    if (err) {
      console.log(`Error de conexión a la base de datos: ${JSON.stringify(err)}`);
    } else {
      console.log(`Conexión correcta a la base de datos en la URL ${process.env.URIDB}`);
      app.listen(process.env.PORT, () =>
        console.log(
          `¡Trianafy sobre el puerto ${process.env.PORT}!`
        )
      );
    }
  
  });