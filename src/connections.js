import mongoose from 'mongoose';

const db = mongoose.connection;
const uri = 'mongodb://localhost:27017/trianafy';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));

db.once('open', _ => {
    console.log("¡Conectado a la base de datos!");
});

db.on('error', error => {
    console.log(error);
})