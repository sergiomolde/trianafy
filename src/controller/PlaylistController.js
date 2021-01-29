import { Playlist } from "../models/Playlist";
import { playlistRepository } from "../repository/PlaylistRepository"

const playlistController = {

    findAll: async (req,res) => {
        try{
            const result = await playlistRepository.findAll(req.user[0].id);
            if(Array.isArray(result) && result.length > 0){
                res.status(201).json(result);
            } else {
                res.status(502).send('La colección de PlayList está vacía.');
            }
        }catch(error){
            res.status(502).send({Error:`Ha ocurrido un error en la petición: ${error}`});
        }
    },
    create: async (req, res) => {
        try{
            let newList = await playlistRepository.addPlaylist({
                name: req.body.name,
                description: req.body.description,
                user_id: req.user[0].id
            });
            res.status(201).json(newList);
        }catch(error){
            res.status(502).json({Error:`Ha ocurrido un error en la petición: ${error.message}`});
        }   
    },
    descriptionById: async (req, res) => {
        try{
            const result = await playlistRepository.descriptionById(req.params.id, req.user[0].id);
            res.status(201).json({
                        description: result[0].description
                        });
        } catch(error){
            res.status(502).json({Error:`Ha ocurrido un error en la petición: ${error.message}`});
        }
    },
    updatePlaylist: async (req,res) => {
        try{
            let newPlaylist = await playlistRepository.updateList({
                name: req.body.name,
                description: req.body.description
            }, req.params.id, req.user[0].id);
            if(newPlaylist){
                res.status(204).json(newPlaylist);
            } else {
                res.status(404).json({message: 'Este ID de playlist no existe.'})
            }
        }catch(error){
            res.status(502).json({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    deletePlaylist: async (req, res) => {
        try{
            const result = await playlistRepository.deletePlaylist(req.params.id, req.user[0].id);
            result.deletedCount > 0 ? res.sendStatus(204) : res.status(404).send('No se ha podido encontrar ninguna Playlist con esa ID');
        }catch(error){
            res.status(502).json({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    addSongToPlaylist: async (req, res) => {
        try{
            const newSong = await playlistRepository.addSongToPlaylist(
                req.params.idPlaylist,
                req.params.idSong, 
                req.user[0].id
            );
            if(newSong != null)
                res.status(201).json(newSong);
            else
                res.status(404).json('No se ha encontrado la playlist/cancion en la petición.');

        }catch(error){
            res.status(502).send({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    getPlaylistSongs: async (req, res) => {
        try{
            const songs = await playlistRepository.getPlaylistSongs(
                req.params.id,
                req.user[0].id
            );
            res.status(201).json(songs);
        }catch(error){
            res.status(502).send({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    getSongFromPlaylist: async (req, res) => {
        try{
            const result = await playlistRepository.getSongFromPlaylist(
                req.params.idPlaylist,
                req.params.idSong,
                req.user[0].id
            );
            res.status(201).json(result);
        }catch(error){
            res.status(502).send({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    deleteSongFromPlaylist: async (req, res) => {
        try{
            const result = await playlistRepository.deleteSongFromPlaylist(
                req.params.idPlaylist,
                req.params.idSong,
                req.user[0].id
            );
            res.status(204).json(result);
        }catch(error){
            res.status(502).send({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    }
}

export {
    playlistController
}