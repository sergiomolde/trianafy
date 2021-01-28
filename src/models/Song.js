const { Schema } = require('mongoose');
var mongoose = require('mongoose');

var cancionesSchema = new Schema ({
    title: {
        type: String,
        required: 'Introduzca el título de la canción por favor.'
    },
    artist: {
        type: String,
        required: 'Introduzca el nombre del artista por favor.'
    },
    album: {
        type: String,
        required: 'Introduzca el album de la canción por favor.'
    },
    year: {
        type: Number,
        required: 'Introduzca el año de la canción por favor.',
        max: [2022, 'El año indicado debe de ser menos a 2022.']
    }
});

const Song = mongoose.model('Song', cancionesSchema)


export {
    Song
}
