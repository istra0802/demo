// homeredux.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  users: [],
};

// Slice
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Actions
export const { setUsers } = homeSlice.actions;

// Reducer
export default homeSlice.reducer;
