const { Schema, model} = require('mongoose');
var mongoose = require('mongoose');

const listaSchema = new Schema ({
    id: String,
    name: String,
    description: String,
    user_id: {
        type: mongoose.objectId,
        ref: 'User'
    },
    songs:[{
        type: mongoose.ObjectId,
        ref: 'Cancion'
    }]
})

const ListaReproduccion = mongoose.model('ListaReproduccion', listaSchema)
module.exports = ListaReproduccion;