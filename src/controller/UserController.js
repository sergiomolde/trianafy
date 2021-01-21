import { User } from '../models/User';
import { userRepository } from '../repository/UserRepository';

const UserController = {

    findAll: async(req, res) => {
        const data = await userRepository.findAll();
        if(Array.isArray(data) && data.length > 0){
            res.json(data);
        } else {
            res.sendStatus(404);
        }
    }
}

module.exports = UserController;