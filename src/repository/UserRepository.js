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
    async findByUsername (username){
        const users = await User.find({});
        let result = users.filter(user => user.username == username);
        console.log(result);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;
    },
    findById(id) {
        const users = User.find({});
        let result = users.filter(user => user.id == id)
        return result;
    },
    toDto(user) {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }
    }
}

export{
    userRepository
}