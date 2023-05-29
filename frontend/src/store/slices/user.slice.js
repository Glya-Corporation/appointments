import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import apiUrl from '../../functions/env.js';

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
  return axios.get(`${apiUrl}/${!role ? 'client' : role === 1 ? 'user' : 'colaborator'}/${id}`, getConfig()).then(res => dispatch(setUser(res.data)));
};

export const loginThunk = (isSeleted, credentials, navigate, remember) => dispatch => {
  return axios
    .post(`${apiUrl}/login/${isSeleted ? 'client' : 'business'}`, credentials)
    .then(res => {
      if (remember) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
      } else {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('token', res.data.token);
      }
      setTimeout(() => isSeleted && navigate('/locales'), 1000);
    })
    .catch(err => console.error(err));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
