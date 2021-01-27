import { Cancion } from '../models/Song';
import mongoose from 'mongoose';

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
    async findSongById(id){
        const song = await Cancion.findById(id, (err) => {
            if(err){
                console.log(err);
            }
        }).exec();
        return song;
    },
    async modifySongById(id, songModified){
        await Cancion.findById(id, (err) => {
            if(err)
                console.log(err);
        }).exec();
        const currentSong = await Cancion.findOneAndUpdate({_id: id}, 
                                                           {title: songModified.title,
                                                            artist: songModified.artist,
                                                            album: songModified.album,
                                                            year: songModified.year});
        return currentSong;
    }
}

export {
    cancionRepository,
}