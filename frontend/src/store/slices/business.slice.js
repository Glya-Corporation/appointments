import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import { getUserThunk } from './user.slice';
import apiUrl from '../../util/apiUrl.js';

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
    .get(`${apiUrl}/business`, getConfig())
    .then(res => dispatch(setBusiness(res.data)))
    .catch(err => console.error(err));
};

export const updateBusinessThunk = (id, isSelected, userId, roleId) => dispatch => {
  return axios
    .put(`${apiUrl}/business/${id}/update`, isSelected, getConfig())
    .then(res => {
      dispatch(getAllBusinessThunk());
      dispatch(getUserThunk(userId, roleId));
    })
    .catch(err => console.error(err));
};

export const updateSettingsThunk = (id, settings) => dispatch => {
  return axios
    .put(`${apiUrl}/business/${id}/update/settings`, settings, getConfig())
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.error(err));
};

export const { setBusiness } = businessSlice.actions;

export default businessSlice.reducer;
