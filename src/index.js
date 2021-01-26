import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose";
import {auth, songs} from './routes/index';
import passport from './services/passport/index';

const app = express();

app.use(morgan('dev'));
morganBody(app)
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());

app.use('/auth', auth);
app.use('/songs', songs);

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