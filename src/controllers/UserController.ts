import type { Request, Response, NextFunction } from "express"

class UserController {
    constructor() {}
    login() {

    }
    register(req:Request, res:Response, next:NextFunction) {
        const {name, lastname, email, telephone, dni} = req.body;
        

    }
    update() {

    }
    delete() {

    }
}

export default UserController