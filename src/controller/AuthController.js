
import { User } from '../models/User';
import { JwtService } from '../services/jwt/index';
import bcrypt from 'bcryptjs';
import { userRepository } from '../repository/UserRepository';

const  AuthController = {

    register: (req, res, next) => {
        let newUsuario = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
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
        });
    },
    findAllUsers: async (req, res, next) => {
        const data = await userRepository.findAll();
        if(Array.isArray(data) && data.length > 0){
            res.json(data);
        } else {
            res.status(404);
        }
    }
}

export {
    AuthController
}