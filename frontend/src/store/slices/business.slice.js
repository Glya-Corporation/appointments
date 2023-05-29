import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import apiUrl from '../../functions/env.js';

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

export const { setBusiness } = businessSlice.actions;

export default businessSlice.reducer;
