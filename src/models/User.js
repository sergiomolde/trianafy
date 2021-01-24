const { Schema } = require('mongoose');
var mongoose = require('mongoose');

let usuarioSchema = new Schema ({
    id: mongoose.ObjectId,
    name: String,
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('Usuario', usuarioSchema)

export{
    User
}