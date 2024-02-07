import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../feature/LoginRedux';
import homeReducer from '../feature/HomeRedux'

const Store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
  },
});

export default Store;