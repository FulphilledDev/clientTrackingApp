import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/adminAuthSlice'
// import authReducer from '../features/auth/clientAuthSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
