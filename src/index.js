import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose";
import {auth, songs, playlist} from './routes/index';
import passport from './services/passport/index';
import cors from 'cors';

// Inicio de Express
const app = express();

// Inicializaciones
app.use(morgan('dev'));
morganBody(app)
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(cors());

// Routes
app.use('/auth', auth);
app.use('/songs', songs);
app.use('/lists', playlist);


// Conexiones a la base de datos
mongoose.connect("mongodb://localhost/trianafy", { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  
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