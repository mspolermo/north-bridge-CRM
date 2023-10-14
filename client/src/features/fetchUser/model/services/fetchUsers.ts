import { User } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetchUsers',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get<User[]>(`http://localhost:4000/accounts/`);
        return response.data;
      } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
      }
    }
);
