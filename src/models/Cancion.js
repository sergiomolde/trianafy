const { Schema } = require('mongoose');
var mongoose = require('mongoose');

var cancionesSchema = new Schema ({
    id: mongoose.ObjectId,
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Cancion = mongoose.model('Cancion', cancionesSchema)


export {
    Cancion
}
