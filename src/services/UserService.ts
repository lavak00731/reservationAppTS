import UserRepository from "../repositories/UserRepository.js";
import type UserInterface from "../interfaces/UserInterface.js";

class UserService {
    constructor(){}
    userRepository = new UserRepository();
    getUser = async (dni: string) => {
        return this.userRepository.getUser(dni)
    }
    registerUser = (user: UserInterface) => {
        return this.userRepository.registerUser(user)
    }
    deleteUser = async (dni: string) => {
        return this.userRepository.deleteUser(dni);
    }
    updateUser = async (id: Object, user: UserInterface) => {
        return this.userRepository.updateUser(id, user)
    }
}

export default UserService