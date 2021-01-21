import { User } from '../models/User'

const userRepository = {

    async findAll(){
        const result = await User.find({}).exec();
        return result;
    }
}

export {
    userRepository,
}