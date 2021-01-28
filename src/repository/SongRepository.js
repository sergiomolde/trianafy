import { Mongoose } from 'mongoose';
import {
    Song
} from '../models/Song';

const songRepository = {

    async findAll() {
        const result = await Song.find({}).exec();
        return result;
    },
    async create(newSong) {
        let song = new Song({
            title: newSong.title,
            artist: newSong.artist,
            album: newSong.album,
            year: newSong.year
        });
        const result = await song.save(song);
        return result;
    },
    async findSongById(id) {
        try {
            const song = await Song.findById(id).exec();
            return song;
        } catch (error) {
            if (error instanceof ReferenceError) {
                console.log("No se ha encontrado ningúna canción con ese ID");
            }
        }
    },
    async modifySongById(id, songModified) {
            await Song.findById(id, (err) => {
                            if (err)
                                console.log(err);
                           }).exec();
            const currentSong = await Song.findOneAndUpdate({_id: id},
                                                                {title: songModified.title,
                                                                artist: songModified.artist,
                                                                album: songModified.album,
                                                                year: songModified.year
                                                                });
            return currentSong;
    },
    async delete(id){
        const result = await Song.deleteOne({_id: id})
        return result;
    }
}

export {
    songRepository,
}