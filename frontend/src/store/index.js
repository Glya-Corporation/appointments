import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import businessSlice from './slices/business.slice';

export default configureStore({
  reducer: {
    user: userSlice,
    business: businessSlice
  }
});
