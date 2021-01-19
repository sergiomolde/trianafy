const { Schema, model } = require('mongoose');

const listaSchema = new Schema = {
    id: String,
    name: String,
    description: String,
    user_id: String,
    songs: [Cancion]
}

module.exports = listaSchema;