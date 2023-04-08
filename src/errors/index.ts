function conflictError(message: string){
    return{
        name:"ConflictError",
        message,
    };
}

function duplicatedEmailError(email: string){
    return{
        name: "DuplicatedEmailError",
        message: "There is already an user with given email"
    };
}

function unauthorizedError(){
    return{
        name: "UnauthorizedError",
        message: "You must be signed in to continued"
    };
}

function notFoundError(){
    return{
        name: "NotFoundError",
        message: "No result for this search"
    }
}

function InvalidCredentialsError(){
    return{
        name:"InvalidCredentialsError",
        message:"Incorrect email or password"
    }
}

export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    InvalidCredentialsError,
}