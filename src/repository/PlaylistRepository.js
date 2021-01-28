import {
    Playlist
} from '../models/Playlist';

const playlistRepository = {

    async findAll(id) {
        const result = await Playlist.find({user_id: id})
                                     .populate('songs')
                                     .exec();
        return result;
    },
    async addPlaylist(newList) {
        const playlist = new Playlist({
            name: newList.name,
            description: newList.description != undefined ? newList.description : "",
            user_id: newList.user_id,
        });
        return await playlist.save();
    },
    async descriptionById(id, userId){
        const result = await Playlist.find({_id: id, user_id: userId})
                                     .populate('songs')
                                     .exec();
        return result;
    },
    async updateList(newPlaylist, id, userId){
        const result = await Playlist.find({_id: id, user_id: userId})
                                     .populate('songs')
                                     .exec();
        if(result.length > 0){
            return await Playlist.updateOne({_id: id},{
                                          name: newPlaylist.name,
                                          description: newPlaylist.description
                                        });
        } else {
            res.status(404).send('No se ha podido encontrar ninguna canción con ese ID.')
        }
    },
    async deletePlaylist(id, userId){
        return await Playlist.deleteOne({
            _id: id,
            user_id: userId
        }).exec();
    }
}

export {
    playlistRepository
}