import {Request, Response, NextFunction} from "express";
import { LoginData, UserData } from "protocols/userProtocols";
import userServices from "services/userServices";


async function signup(req: Request, res: Response, next: NextFunction){
    const {name, email, password} = req.body as UserData

    try{
        await userServices.signup({name, email, password});
        return res.sendStatus(201);
    }catch(err){
        next(err);
    }

}

async function signin(req: Request, res: Response, next: NextFunction){
    const {email, password} = req.body as LoginData

    try {
        const token = await userServices.signin({email, password});
        return res.send({token});
    } catch(err){
        next(err);
    }
}

export default{
    signup,
    signin
}