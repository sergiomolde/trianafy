import { Cancion } from '../models/Cancion';

const cancionRepository = {

    async findAll(){
        const result = await Cancion.find({}).exec();
        return result;
    },
    async create(newSong){
        let song = new Cancion({
            title: newSong.title,
            artist: newSong.artist,
            album: newSong.album,
            year: newSong.year
        });
        const result = await song.save(song);
        return result;
    },
    findSongById(id){
        const songsList = Cancion.find({});
        let result = songsList.filter(song => song._id == id)
        return result;
    }
}

export {
    cancionRepository,
}