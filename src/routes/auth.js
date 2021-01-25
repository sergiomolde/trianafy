import { Router } from 'express';
import { AuthController } from '../controller/AuthController';
import { password } from '../services/passport/index'

const router = Router()

router.post('/register', AuthController.register);

router.get('/prueba', AuthController.findAllUsers);

router.post('/login', password(), AuthController.login)

export default router;