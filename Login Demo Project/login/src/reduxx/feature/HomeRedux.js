// homeredux.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: {},
};

// Slice
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Actions
export const { setUser } = homeSlice.actions;

// Reducer
export default homeSlice.reducer;
