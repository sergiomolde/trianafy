import {
    Cancion
} from '../models/Cancion';
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
    findSongById: (req, res) => {
        const song = cancionRepository.findSongById(req.params.id);
        res.status(201).json({
            title: song.title,
            artist: song.artist,
            album: song.album,
            year: song.year
        })
    }
}

export {
    cancionController
}