import { Cancion } from '../models/Cancion'

const cancionRepository = {

    async findAll(){
        const result = await Cancion.find({}).exec();
        return result;
    }
}

export {
    cancionRepository,
}