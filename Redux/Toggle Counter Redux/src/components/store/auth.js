import { createSlice } from '@reduxjs/toolkit';

const initialAuth = { isAuth: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuth,
  reducers: {
    login(state) { state.isAuth = true },
    logout(state) { state.isAuth = false }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;