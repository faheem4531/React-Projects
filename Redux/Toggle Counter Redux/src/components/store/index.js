import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) { state.counter++ },
    decrement(state) { state.counter-- },
    increase(state, action) { state.counter = state.counter + action.payload },
    toggle(state) { state.showCounter = !state.showCounter }

  }
});

const initialAuth = { isAuth: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuth,
  reducers: {
    login(state) { state.isAuth = true },
    logout(state) { state.isAuth = false }
  }
})

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;