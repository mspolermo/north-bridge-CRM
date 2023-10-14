import { StateSchema } from "@/app/providers/StoreProvider";

export const getUsername = (state: StateSchema) => state?.loginForm?.username || '';
export const getUserPassword = (state: StateSchema) => state?.loginForm?.password || '';
export const loadingUser = (state: StateSchema) => state?.loginForm?.isLoading;
export const errorUser = (state: StateSchema) => state?.loginForm?.error;
