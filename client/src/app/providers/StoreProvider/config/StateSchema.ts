import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import { UsersSchema } from "@/features/fetchUsers";

export interface StateSchema {
    user: UserSchema;
    //Асинхронные
    users?: UsersSchema;
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
