const { Schema } = require('mongoose');
var mongoose = require('mongoose');

let usuarioSchema = new Schema ({
    name: {
        type: String,
        required: 'Necesito su nombre y apellidos para continuar.'
    },
    username: {
        unique: true,
        type: String,
        required: 'Su nombre de usuario es obligatorio.'
    },
    email: {
        type: String,
        unique: true,
        required: 'Su correo electrónico es obligatorio.'

    },
    password: {
        type: String,
        require: 'Necesito su contraseña para continuar.'
    }
}, {
    versionKey: false
});

const User = mongoose.model('User', usuarioSchema)

export{
    User
}