import {Router} from "express";
import bookControllers from "controllers/bookControllers";
import authMiddlewares from "middlewares/authMiddlewares";
import { validateSchema } from "middlewares/schemaValidationMiddleware";
import { bookSchema } from "schema/bookSchema";

const bookRoutes = Router();

bookRoutes.all('/*', authMiddlewares.authValidation)
bookRoutes.post('/', validateSchema(bookSchema), bookControllers.create);
bookRoutes.get('/', bookControllers.findAll);
bookRoutes.post('/signin', bookControllers.takeBook);
bookRoutes.get('/my-books', bookControllers.findAllMyBooks);

export default bookRoutes;