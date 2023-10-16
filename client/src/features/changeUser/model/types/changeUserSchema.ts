import { User } from "@/entities/User";

export interface changeUserSchema{
    data?: User,
    isLoading: boolean;
    error?: string;
}
