import { Playlist } from "../models/Playlist";
import { playlistRepository } from "../repository/PlaylistRepository"

const playlistController = {

    findAll: async (req,res) => {
        const result = await playlistRepository.findAll(req.user[0].id);
        if(Array.isArray(result) && result.length > 0){
            res.status(201).json(result);
        } else {
            res.status(404).send('La colección de PlayList está vacía.');
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
            res.status(400).json({Error:`Ha ocurrido un error en la petición: ${error.message}`});
        }   
    },
    descriptionById: async (req, res) => {
        try{
            const result = await playlistRepository.descriptionById(req.params.id, req.user[0].id);
            res.status(201).send(result[0].description);
        } catch(error){
            res.status(404).json({Error:`Ha ocurrido un error en la petición: ${error.message}`});
        }
    },
    updatePlaylist: async (req,res) => {
        try{
            let newPlaylist = new Playlist({
                name: req.body.name,
                description: req.body.description
            })
            await playlistRepository.updateList(newPlaylist, req.params.id, req.user[0].id)
            res.status(204).json(newPlaylist);
        }catch(error){
            res.status(404).json({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    },
    deletePlaylist: async (req, res) => {
        try{
            const result = await playlistRepository.deletePlaylist(req.params.id, req.user[0].id);
            result.deletedCount > 0 ? res.sendStatus(204) : res.status(404).send('No se ha podido encontrar ninguna Playlist con esa ID');
        }catch(error){
            res.status(404).json({Error:`Ha ocurrido un error en la petición: ${error.message}`})
        }
    }
}

export {
    playlistController
}