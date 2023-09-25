import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './slices/coinSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    user: userReducer,
  },
});

export default store;