import {
    Song
} from '../models/Song';
import {
    songRepository
} from '../repository/SongRepository';

const songController = {

    allSongs: async (req, res) => {
        const data = await songRepository.findAll();
        if (Array.isArray(data) && data.length > 0) {
            res.json(data);
        } else {
            res.sendStatus(404);
        }
    },
    addSong: async(req, res) => {
        if (req.body.title != null) {
            let newSong = {
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            }
            await songRepository.create(newSong);
            res.status(201).json({
                id: newSong.id,
                title: newSong.title,
                artist: newSong.artist,
                album: newSong.album,
                year: newSong.year
            });
        } else {
            res.status(400).send("El título de la canción no es válido.");
        }
    },
    findSongById: async(req, res) => {
        let song = await songRepository.findSongById(req.params.id);
        console.log(song);
        if(song != null){   
            res.status(201).json({
                title: song.title,
                artist: song.artist,
                album: song.album,
                year: song.year
            });
        } else {
            res.status(404).send("Canción no encontrada.");
        }
    },
    updateSong: async(req, res) => {
        const modifySong = await songRepository.findSongById(req.params.id);
        if(modifySong != null){
            let newSong = {
                title: req.body.title,
                artist: req.body.artist,
                album: req.body.album,
                year: req.body.year
            };
            songRepository.modifySongById(req.params.id, newSong);
            res.status(204).send("Cancion modificada con éxito");
        } else {
            res.status(404).send("No se ha podido modificar la cancion");
        }

    },
    deleteSong: (req, res) => {
        songRepository.findSongById(req.params.id)
                      .then(songRepository.delete(req.params.id) && res.sendStatus(204))
                      .catch((err) => {
                          res.status(404).send(err);
                      });
    }
}

export {
    songController
}