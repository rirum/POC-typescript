import {Router} from "express";
import userControllers from "controllers/userControllers";
import { validateSchema } from "middlewares/schemaValidationMiddleware";
import { userSchema } from "schema/userSchema";

const userRoutes = Router();

userRoutes.post('/signup', validateSchema(userSchema), userControllers.signup);
userRoutes.post('/signin', userControllers.signin)

export default userRoutes;