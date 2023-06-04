import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
const apiUrl = import.meta.env.VITE_API_URL;

export const galerySlice = createSlice({
  name: 'galery',
  initialState: [],
  reducers: {
    setGalery: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getAllGaleryThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}/photo/business/${id}`, getConfig())
    .then(res => dispatch(setGalery(res.data)))
    .catch(err => console.error(err));
};

export const { setGalery } = galerySlice.actions;

export default galerySlice.reducer;
