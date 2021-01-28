const { Schema } = require('mongoose');
var mongoose = require('mongoose');

var cancionesSchema = new Schema ({
    id: mongoose.ObjectId,
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Song = mongoose.model('Song', cancionesSchema)


export {
    Song
}
