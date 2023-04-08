import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories";
import { v4 as uuidV4} from "uuid";
import errors from "errors";
import { UserData, LoginData } from "protocols/userProtocols";


async function signup({name, email, password}: UserData){
    const {rowCount} = await userRepositories.findByEmail(email);
    if (rowCount) throw errors.duplicatedEmailError(email);

    const hashPassword = await bcrypt.hash(password, 10);
    await userRepositories.signup({name, email, password: hashPassword});
}

async function signin({email, password}: LoginData){
    const {
        rowCount,
        rows:[user],
    } = await userRepositories.findByEmail(email);
    if (!rowCount) throw errors.InvalidCredentialsError();

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw errors.InvalidCredentialsError();

    const token = uuidV4();
    await userRepositories.createSession({token, userId:user.id});
    return token;
}

export default {
    signin,
    signup,
}