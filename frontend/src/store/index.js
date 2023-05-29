import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import businessSlice from './slices/business.slice';
import businessCategoriesSlice from './slices/businessCategories.slice';
import favoritesSlice from './slices/favorites.slice';

export default configureStore({
  reducer: {
    user: userSlice,
    business: businessSlice,
    businessCategories: businessCategoriesSlice,
    favorites: favoritesSlice
  }
});
