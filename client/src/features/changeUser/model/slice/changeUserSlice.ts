import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { changeUserSchema } from '../types/changeUserSchema';
import { User } from '@/entities/User';


const initialState: changeUserSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const changeUserSlice = createSlice({
    name: 'users/changeUser',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
        },
    },
});

export const { actions: changeUserActions } = changeUserSlice;
export const { reducer: changeUserReducer } = changeUserSlice;
