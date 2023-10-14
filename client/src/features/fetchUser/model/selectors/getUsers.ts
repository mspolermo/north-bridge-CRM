import { StateSchema } from "@/app/providers/StoreProvider";

export const getUsers = (state: StateSchema) => state.users?.data;
export const loadingUsers = (state: StateSchema) => state.users?.isLoading;
export const errorUsers = (state: StateSchema) => state.users?.error;
