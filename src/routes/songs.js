import { Router } from 'express';
import { CancionController } from '../controller/CancionController';

const router = Router();


router.post('/songs', CancionController.addSong);
router.get('/songs', CancionController.findAll)