import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/login', userController.login);
userRoutes.post('/register', userController.register);
userRoutes.put('/update', userController.update);
userRoutes.delete('/delete', userController.delete);

export default userRoutes;