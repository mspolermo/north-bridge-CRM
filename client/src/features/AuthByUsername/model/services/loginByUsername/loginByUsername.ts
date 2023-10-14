import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/fetchByIdStatus',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(`http://localhost:4000/login/`, authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
