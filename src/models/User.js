import mongoose from 'mongoose';
const { Schema, model} = require('mongoose');

let usuarioSchema = new Schema ({
    id: Number,
    nombre: String,
    username: String,
    email: String,
    password: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema)