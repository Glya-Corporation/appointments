import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/env.js';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: [],
  reducers: {
    setServices: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getServicesThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}services/business/${id}`, getConfig())
    .then(res => {
      dispatch(setServices(res.data));
    })
    .catch(err => console.error(err));
};

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
