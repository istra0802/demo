import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../feature/LoginRedux';

const Store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default Store;