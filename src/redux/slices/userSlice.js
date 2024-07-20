import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', userData);
      const { access_token } = response.data;

      // Сохранение токена в localStorage
      localStorage.setItem('token', access_token);

      const profileResponse = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // Сохранение данных пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(profileResponse.data));

      return profileResponse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return null;
});

const initialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isSuccess = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isSuccess = false;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
