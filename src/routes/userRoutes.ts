import {Router} from "express";
import userControllers from "controllers/userControllers";


const userRoutes = Router();

userRoutes.post('/signup', userControllers.signup);
userRoutes.post('/signin', userControllers.signin)

export default userRoutes;