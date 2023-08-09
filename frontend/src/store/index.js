import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import businessSlice from './slices/business.slice';
import businessCategoriesSlice from './slices/businessCategories.slice';
import favoritesSlice from './slices/favorites.slice';
import loaderSlice from './slices/loader.slice';
import servicesCategoriesSlice from './slices/servicesCategories.slice';
import servicesSlice from './slices/services.slice';
import galerySlice from './slices/galery.slice';
import scheduleSlice from './slices/schedule.slice';
import appointmentsSlice from './slices/appointments.slice';
import clientSlice from './slices/client.slice';

export default configureStore({
  reducer: {
    loader: loaderSlice,
    user: userSlice,
    business: businessSlice,
    businessCategories: businessCategoriesSlice,
    favorites: favoritesSlice,
    servicesCategories: servicesCategoriesSlice,
    services: servicesSlice,
    galery: galerySlice,
    schedule: scheduleSlice,
    appointments: appointmentsSlice,
    client: clientSlice
  }
});
