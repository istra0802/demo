import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    users: [],
  },
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

// Thunk action creator to initialize state from localStorage
export const initializeStateFromLocalStorage = () => dispatch => {
  const storedEmail = JSON.parse(localStorage.getItem("email")) || [];
  storedEmail.forEach(user => {
    dispatch(loginSlice.actions.addUser(user));
  });
};

export const { addUser, removeUser } = loginSlice.actions;
export default loginSlice.reducer;