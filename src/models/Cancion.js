import mongoose from 'mongoose';
const { Schema} = require('mongoose');

var cancionesSchema = new Schema ({
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Cancion = mongoose.model('Cancion', cancionesSchema)

export {
    Cancion
}
