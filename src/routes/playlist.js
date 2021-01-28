import { Router } from 'express';
import { token } from '../services/passport'
import { playlistController } from '../controller/PlaylistController';
import { validar } from '../middlewares/validacion';
import { body } from 'express-validator';

const router = Router();

router.get('/', token(), playlistController.findAll);
router.post('/',[token(),body('id').not().exists().withMessage('No hace falta que indiques el tu ID.')],
            validar,
            playlistController.create);
router.get('/:id', token(), playlistController.descriptionById);
router.put('/:id', token(), playlistController.updatePlaylist);
router.delete('/:id', token(), playlistController.deletePlaylist)



export default router;