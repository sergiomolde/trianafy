import { Cancion } from '../models/Cancion';
import { cancionRepository } from '../repository/CancionRepository';

const cancionController = {
    
    todasCanciones: async(req, res) => {
        const data = await cancionRepository.findAll()
        if(Array.isArray(data) && data.length > 0){
            res.json(data);
        } else {
            res.sendStatus(404);
        }
    },
    addSong: (req, res) => {
        let newSong = {
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        }
        cancionRepository.create(newSong);
    }
}

export {
    cancionController
}