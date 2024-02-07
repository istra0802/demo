import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.isLogged = state.users.some(user => user.isLogged);
    },
  },
});

// Thunk action creator to initialize state from localStorage


export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;