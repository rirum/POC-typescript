import err from "errors";
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { UserBook } from "protocols/userBook";

export function validateSchema(schema: ObjectSchema<UserBook>){
    return (req: Request, res: Response, next: NextFunction) => {
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error){
            
            throw err.conflictError(error.details[0].message);
        }
    }
}