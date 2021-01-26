import { Cancion } from '../models/Cancion'

const cancionRepository = {

    async findAll(){
        const result = await Cancion.find({}).exec();
        return result;
    },
    async create(newSong){
        let song = {
            title: newSong.title,
            artist: newSong.artist,
            album: newSong.album,
            year: newSong.year
        }
        Cancion.save(song);
    }
}

export {
    cancionRepository,
}