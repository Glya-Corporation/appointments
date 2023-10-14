import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import { getUserThunk } from './user.slice';
import apiUrl from '../../util/env.js';

export const businessSlice = createSlice({
  name: 'business',
  initialState: [],
  reducers: {
    setBusiness: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getAllBusinessThunk = () => dispatch => {
  return axios
    .get(`https://api-reservations.glya-corporation.uk/api/v1/business`, getConfig())
    .then(res => dispatch(setBusiness(res.data)))
    .catch(err => console.error(err));
};

export const updateBusinessThunk = (id, isSelected, userId, roleId) => dispatch => {
  return axios
    .put(`https://api-reservations.glya-corporation.uk/api/v1/business/${id}/update`, isSelected, getConfig())
    .then(res => {
      dispatch(getAllBusinessThunk());
      dispatch(getUserThunk(userId, roleId));
    })
    .catch(err => console.error(err));
};

export const { setBusiness } = businessSlice.actions;

export default businessSlice.reducer;
