import { User } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ChangeUserProps extends User {
}

export const changeUser = createAsyncThunk<User, ChangeUserProps, { rejectValue: string }>(
    'users/changeUser',
    async (newUserData, thunkAPI) => {
      try {
        const response = await axios.put<User>(`http://localhost:4000/api/users/`, newUserData);
        return response.data;
      } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
      }
    }
);