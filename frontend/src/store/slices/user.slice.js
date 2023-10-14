/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
const apiUrl = import.meta.env.VITE_API_URL;
import { setLoaderThunk } from './loader.slice';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getUserThunk = (id, role) => dispatch => {
  return axios
    .get(`${apiUrl}/${!role ? 'client' : role === 1 ? 'user' : 'colaborator'}/${id}`, getConfig())
    .then(res => {
      console.log(res, 'hi');
      dispatch(setUser(res.data));
    })
    .catch(err => console.error(err));
};

export const loginThunk = (isSeleted, credentials, navigate, remember, ruta) => dispatch => {
  dispatch(setLoaderThunk(true));
  return axios
    .post(`${apiUrl}/login/${isSeleted ? 'client' : 'business'}`, credentials)
    .then(res => {
      console.log(res.data)
      if (remember) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('view', JSON.stringify({ view: true }));
      } else {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('view', JSON.stringify({ view: true }));
      }
      if (!isSeleted && ruta) {
        navigate(ruta);
      } else if (!isSeleted) {
        navigate('/home/business');
      } else {
        navigate('/locales');
      }
    })
    .catch(err => console.error(err))
    .finally(() => {
      setTimeout(() => {
        dispatch(setLoaderThunk(false));
      }, 2000);
    });
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
