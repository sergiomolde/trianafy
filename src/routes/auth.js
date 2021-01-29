import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controller/AuthController';
import { validar } from '../middlewares/validacion';
import { password } from '../services/passport';

const router = Router()

router.post('/register', [
    body('password').isLength({min: 4}).withMessage('La contraseña debe tener como mínimoo 8 caracteres'),
    body('email').isEmail().withMessage('El campo email debe ser un email válido'),
    body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente')
],
validar, 
AuthController.register);

router.post('/login', password(), AuthController.login);

export default router;