import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

const apiUrl = import.meta.env.VITE_API_URL;

export const servicesCategoriesSlice = createSlice({
  name: 'servicesCategories',
  initialState: [],
  reducers: {
    setServicesCategories: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getServicesCategoriesThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}/api/v1/services/categories/business/${id}`, getConfig())
    .then(res => {
      dispatch(setServicesCategories(res.data));
    })
    .catch(err => console.error(err));
};

export const { setServicesCategories } = servicesCategoriesSlice.actions;

export default servicesCategoriesSlice.reducer;
