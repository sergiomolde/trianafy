
import { User } from '../models/User';

const AuthController = {

    register: (req, res, next) => {
        let password = bcrypt.hashSync(newUser.password, parseInt(process.env.BCRYPT_ROUNDS));
        let newUsuario = userRepository.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: password
        });
        res.status(201).send(JSON.stringify(newUsuario));
    },
    login: (req, res, next) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        })
    }
}