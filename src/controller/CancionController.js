import {
    Cancion
} from '../models/Song';
import {
    cancionRepository
} from '../repository/CancionRepository';

const cancionController = {

    todasCanciones: async (req, res) => {
        const data = await cancionRepository.findAll()
        if (Array.isArray(data) && data.length > 0) {
            res.json(data);
        } else {
            res.sendStatus(404);
        }
    },
    addSong: (req, res) => {
        if (req.body.title != null) {
            let newSong = {
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            }
            cancionRepository.create(newSong);
            res.status(201).json({
                title: newSong.title,
                artist: newSong.artist
            });
        } else {
            res.status(400).send("El título de la canción no es válido.")
        }
    },
    findSongById: async(req, res) => {
        let song = await cancionRepository.findSongById(req.params.id);
        if(song != null){   
            res.status(201).json({
                title: song.title,
                artist: song.artist,
                album: song.album,
                year: song.year
            })
        } else {
            res.send(404)
        }
    },
    updateSong: async(req, res) => {
        const cancionAModificar = cancionRepository.modifySongById(req.params.id)
        if(cancionAModificar != null){
            let newSong = new Song({
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            });
            await cancionRepository.modifySongById(req.params.id, newSong);
            res.status(204).send("Cancion modificada con éxito");
        } else {
            res.status(404).send("No se ha podido modificar la cancion");
        }

    }
}

export {
    cancionController
}