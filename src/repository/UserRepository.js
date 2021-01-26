import bcrypt from 'bcryptjs';
import { User } from '../models/User'

const userRepository = {

    async findAll(){
        const result = await User.find({}).exec();
        return result;
    },
    async addUser(newUser){
        let password = bcrypt.hashSync(newUser.password, parseInt(process.env.BCRYPT_ROUNDS));
        const user = new User({
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            password: password
        });
        const result = await user.save();
        return result;
    },
    findByUsername(username){
        const users = User.find({});
        let result = users.filter(user => user.username == username);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined
    },
    findById(id) {
        const users = User.find({});
        let result = users.filter(user => user.id == id)
        return result;
    }
}

export{
    userRepository
}