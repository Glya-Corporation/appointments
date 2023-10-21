import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/apiUrl.js';

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
    .get(`${apiUrl}/services/categories/business/${id}`, getConfig())
    .then(res => {
      dispatch(setServicesCategories(res.data));
    })
    .catch(err => console.error(err));
};

export const createServicesThunk = (newServices, services) => dispatch => {
  return axios
    .post('${apiUrl}/service', newServices, getConfig())
    .then(res => {
      dispatch(setServicesCategories([...services, ...res.data]));
    })
    .catch(err => console.error(err));
};

export const updateServiceThunk = (data, update) => dispatch => {
  return axios
    .put(`${apiUrl}/service/${data.id}/update`, update, getConfig())
    .then(res => {
      console.log(res.data);
      dispatch(getServicesCategoriesThunk(data.businessId));
    })
    .catch(err => console.error(err));
};

export const deleteServiceThunk = (id, services) => dispatch => {
  return axios
    .delete(`${apiUrl}/service/${id}/delete`, getConfig())
    .then(res => {
      console.log(res.data);
      dispatch(setServicesCategories(services));
    })
    .catch(err => console.error(err));
};

export const { setServicesCategories } = servicesCategoriesSlice.actions;

export default servicesCategoriesSlice.reducer;
