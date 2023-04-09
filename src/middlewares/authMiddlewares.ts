import errors from "errors";
import userRepositories from "repositories/userRepositories";
import {Request, Response, NextFunction} from "express";

async function authValidation (req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) throw errors.unauthorizedError();

    try{
        const{ rows: [session],
        } = await userRepositories.findSessionByToken(token);
        if (!session) throw errors.unauthorizedError();
        
        const { rows: [user], 
        } = await userRepositories.findById(session.userId);
        if (!user) throw errors.notFoundError();

        res.locals.user = user;
        next();
    }catch(error){
        next(error);
    }
}

export default { authValidation}