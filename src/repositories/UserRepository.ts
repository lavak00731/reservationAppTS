import type UserInterface from "../interfaces/UserInterface.js";

import User from "../models/User.js";

class UserRepository {
    constructor(){}
    getUser =  async (dni:string) => {
        return await User.findOne({dni})
    }
    registerUser = async (user: UserInterface) => {
        return await User.create(user)
    }
    deleteUser = async (dni: string) => {
        return await User.deleteOne({dni: dni})
    }
    updateUser = async (id: Object, user: UserInterface) => {
        console.log('user ', user)
        return await User.updateOne({_id: id}, {$set: user})
    }
}

export default UserRepository;