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

export const getFavoritesThunk = (id, navigate) => dispatch => {
  return axios
    .get(`${apiUrl}/business/favorite/client/${id}`, getConfig())
    .then(res => {
      console.log(id, res);
      const { data } = res;
      dispatch(setFavorites(data.business));
      if (navigate) {
        const favorite = data.business.find(item => item.business_clients.isSelected);
        favorite && navigate(`/home/${favorite.name}/${favorite.id}`);
        sessionStorage.setItem('view', JSON.stringify({ view: false }));
        localStorage.setItem('view', JSON.stringify({ view: false }));
      }
    })
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
