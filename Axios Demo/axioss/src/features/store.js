import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./List/ListSlice"

const Store = configureStore({
  reducer: {
    movies: ListReducer,
  },
});

export default Store;