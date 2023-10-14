import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersSchema } from '../types/usersSchema';
import { User } from '@/entities/User';
import { fetchUsers } from '../services/fetchUsers';

const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setBank: (state, action: PayloadAction<User[]>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
});

export const { actions: usersActions } = userSlice;
export const { reducer: usersReducer } = userSlice;
