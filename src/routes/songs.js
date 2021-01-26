import { Router } from 'express';
import { cancionController } from '../controller/CancionController';

const router = Router();


router.get('/', cancionController.todasCanciones);
router.post('/', cancionController.addSong);
router.get('/:id', cancionController.findSongById);

export default router;