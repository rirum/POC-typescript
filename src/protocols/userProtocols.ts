export type UserEntity = {
    id: number,
    name: string,
    email: string,
    password: string,
}

export type Session = {
    id?:number,
    token: string,
    userId: number,
}

export type UserData = Omit<UserEntity, "id">
export type LoginData = Omit<UserEntity, "id" |"name">
export default Session;
// export type SessionData = Omit<Session, "id">