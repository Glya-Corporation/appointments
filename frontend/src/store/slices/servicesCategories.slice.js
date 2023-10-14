import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/env.js';

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
    .get(`https://api-reservations.glya-corporation.uk/api/v1/services/categories/business/${id}`, getConfig())
    .then(res => {
      dispatch(setServicesCategories(res.data));
    })
    .catch(err => console.error(err));
};

export const { setServicesCategories } = servicesCategoriesSlice.actions;

export default servicesCategoriesSlice.reducer;
