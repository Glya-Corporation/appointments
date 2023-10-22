import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import apiUrl from '../../util/apiUrl';

export const colaboratorsSlice = createSlice({
  name: 'colaborators',
  initialState: [],
  reducers: {
    setColaborators: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getColaboratorsThunk = businessId => dispatch => {
  return axios
    .get(`${apiUrl}/colaborators/business/${businessId}`, getConfig())
    .then(res => dispatch(setColaborators(res.data)))
    .catch(err => console.error(err));
};

export const updateColaboratorThunk = (id, status, colaborators) => dispatch => {
  return axios
    .put(`${apiUrl}/colaborator/${id}/update`, status, getConfig())
    .then(res => {
      dispatch(setColaborators(colaborators));
    })
    .catch(err => console.error(err));
};

export const createColaboratorThunk = (colaborator, colaborators) => dispatch => {
  return axios
    .post(`${apiUrl}/colaborator`, colaborator, getConfig())
    .then(res => {
      dispatch(setColaborators([...colaborators, ...res.data]));
    })
    .catch(err => console.error(err));
};

export const deleteColaboratorThunk = (id, colaborators) => dispatch => {
  return axios
    .delete(`${apiUrl}/colaborator/${id}/delete`, getConfig())
    .then(res => {
      dispatch(setColaborators(colaborators));
    })
    .catch(err => console.error(err));
};

export const { setColaborators } = colaboratorsSlice.actions;

export default colaboratorsSlice.reducer;
