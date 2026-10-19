import type { Request, Response, NextFunction } from "express"
import UserService from "../services/UserService.js";
import { generateToken } from "../lib/handletoken.js";
import { validateDni, validateEmail, validatePhone, validatePassword } from "../lib/validations.js";

class UserController {
    constructor() {}
    userService = new UserService();
    login = async(req:Request, res:Response, next:NextFunction) => {
        const { dni, password } = req.body;
        if( !dni  || !password ) {
            return res.sendStatus(400);
        }
        const user = await this.userService.getUser(dni); 
        if( user && password === user.password) {
            return res.status(200).json({user: user, token: generateToken(user._id as Object)})
        }
        return res.sendStatus(403);
    }
    register = async (req:Request, res:Response, next:NextFunction) => {
        const {name, lastname, email, telephone, dni, password} = req.body;
        if( !name || !lastname || !email || !telephone || !dni  || !password ) {
            return res.sendStatus(400);
        }
        if( !validateDni(dni) || !validatePhone(telephone) || !validateEmail(email) || !validatePassword(password) ) {
            return res.sendStatus(400);
        }
        const user = await this.userService.getUser(dni); 
        if(!user) {
            const result = await this.userService.registerUser({name: name, lastname: lastname, email: email, telephone:telephone, dni: dni, password: password})
            if(result) {
                return res.status(200).json({ success: true, token: generateToken(result._id as Object) })
            }
        }
        return res.sendStatus(409);
    }
    update = () => {

    }
    delete = async(req:Request, res:Response, next:NextFunction) => {
        const { dni } = req.body;
        if( !dni ) {
            return res.sendStatus(400);
        }
        const result = await this.userService.deleteUser(dni);
        if(result.deletedCount > 0) {
            return res.sendStatus(200);
        }
        return res.sendStatus(404);
    }
}

export default UserController