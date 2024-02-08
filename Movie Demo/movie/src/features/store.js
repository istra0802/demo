import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/MovieSlice";

const Store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default Store;