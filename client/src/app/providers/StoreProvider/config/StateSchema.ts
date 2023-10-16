import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import { changeUserSchema } from "@/features/changeUser";
import { UsersSchema } from "@/features/fetchUsers";

export interface StateSchema {
    user: UserSchema;
    //Асинхронные
    users?: UsersSchema;
    loginForm?: LoginSchema;
    changeUser?: changeUserSchema;
}

export type StateSchemaKey = keyof StateSchema;
