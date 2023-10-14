import { User } from "@/entities/User";

export interface UsersSchema {
    data?: User[];
    isLoading: boolean;
    error?: string;
}