import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import businessSlice from './slices/business.slice';
import businessCategoriesSlice from './slices/businessCategories.slice';
import favoritesSlice from './slices/favorites.slice';
import loaderSlice from './slices/loader.slice';
import servicesCategoriesSlice from './slices/servicesCategories.slice';

export default configureStore({
  reducer: {
    loader: loaderSlice,
    user: userSlice,
    business: businessSlice,
    businessCategories: businessCategoriesSlice,
    favorites: favoritesSlice,
    servicesCategories: servicesCategoriesSlice
  }
});
