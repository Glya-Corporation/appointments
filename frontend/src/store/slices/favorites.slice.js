import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
const apiUrl = import.meta.env.VITE_API_URL;

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setFavorites: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getFavoritesThunk = id => dispatch => {
  return axios
    .get(`${apiUrl}/business/favorite/client/${id}`, getConfig())
    .then(res => dispatch(setFavorites(res.data.business)))
    .catch(err => console.error(err));
};

export const updateFavorite = (id, clientId) => dispatch => {
  return axios
    .put(`${apiUrl}/business/favorite/${Number(id)}/update`, {}, getConfig())
    .then(res => {
      dispatch(getFavoritesThunk(clientId));
      console.log(res.data);
    })
    .catch(err => console.error(err));
};

export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
