export interface User {
    id: number,
    username: string,
    password : string,
    role: string
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
