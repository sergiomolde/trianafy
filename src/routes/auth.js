import { Router } from 'express';
import { AuthController } from '../controller/AuthController';

const router = Router()

router.post('/register', AuthController.register);

router.post('/login', password(), AuthController.log
)

export default router;