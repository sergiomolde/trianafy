import { Router } from 'express';
import { body } from 'express-validator';
import { emailExists, usernameExists } from '../repository/UserRepository';
import { AuthController } from '../controller/AuthController';
import { validar } from '../middlewares/validacion';
import { password } from '../services/passport';

const router = Router()

router.post('/register', AuthController.register);

router.get('/prueba', AuthController.findAllUsers);

router.post('/login', password(), AuthController.login);

export default router;