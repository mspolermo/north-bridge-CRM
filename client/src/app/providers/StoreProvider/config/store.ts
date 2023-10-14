import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { usersReducer } from '@/features/fetchUsers';
import { loginReducer } from '@/features/AuthByUsername';
import { userReducer } from '@/entities/User';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            user: userReducer,
            users: usersReducer,
            loginForm: loginReducer,
        },
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
