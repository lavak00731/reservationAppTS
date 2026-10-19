import type UserInterface from "../interfaces/UserInterface.js";

import User from "../models/User.js";

class UserRepository {
    constructor(){}
    getUser = (dni:string) => {
        return User.findOne({dni})
    }
    registerUser = (user: UserInterface) => {
        return User.create(user)
    }
    deleteUser = (dni: string) => {
        return User.deleteOne({dni: dni})
    }
}

export default UserRepository;