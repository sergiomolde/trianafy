import { Router } from 'express';
import { cancionController } from '../controller/CancionController';
import { cancionRepository } from '../repository/CancionRepository';

const router = Router();


router.get('/', cancionController.todasCanciones);
router.post('/', cancionController.addSong);
router.get('/:id', cancionController.findSongById);
router.post('/:id', cancionController.updateSong)

export default router;