// reduxx/loginSlice.js
import { createSlice } from '@reduxjs/toolkit';
const storedEmail = JSON.parse(localStorage.getItem("email")) || [];
const initialState = {
    users: storedEmail.filter(user => user.isLogged), // Filter out only logged-in users
    isLogged: storedEmail.some(user => user.isLogged),
};

console.log(initialState);
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.isLogged = true;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.isLogged = state.users.some(user => user.isLogged);
    },
  },
});
export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;