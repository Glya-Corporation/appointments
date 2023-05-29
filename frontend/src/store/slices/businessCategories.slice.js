import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../functions/env.js';

export const businessCategoriesSlice = createSlice({
  name: 'businessCategories',
  initialState: [],
  reducers: {
    setBusinessCategories: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getBusinessCategoriesThunk = () => dispatch => {
  return axios
    .get(`${apiUrl}/business/categories/all`)
    .then(res => dispatch(setBusinessCategories(res.data)))
    .catch(err => console.error(err));
};

export const { setBusinessCategories } = businessCategoriesSlice.actions;

export default businessCategoriesSlice.reducer;
