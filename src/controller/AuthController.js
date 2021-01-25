
import { User } from '../models/User';
import { JwtService } from '../services/jwt/index';
import bcrypt from 'bcryptjs';
import { userRepository } from '../repository/UserRepository';

const AuthController = {

    register: (req, res, next) => {
        let password = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS));
        let newUsuario = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: password
        };
        userRepository.addUser(newUsuario);
        res.status(201).json({
            username: newUsuario.username,
            email: newUsuario.email
        });
    },
    login: (req, res, next) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        })
    },
    encontrarTodo: (req, res, next) => {
        console.log(userRepository.findAll());
        console.log(userRepository.findAll());
        return res.json(userRepository.findAll());
    }
}

export {
    AuthController
}