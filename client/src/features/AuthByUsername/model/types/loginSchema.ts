import { User } from "@/entities/User";

export interface LoginSchema extends Pick<User, 'username' | 'password'>{
    isLoading: boolean;
    error?: string;
}