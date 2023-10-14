import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/env.js';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    setAppointments: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getAllAppointmentsThunk = businessId => dispatch => {
  return axios
    .get(`https://api-reservations.glya-corporation.uk/api/v1/appointments/business/${businessId}`, getConfig())
    .then(res => dispatch(setAppointments(res.data)))
    .catch(err => console.error(err));
};

export const createAppointmentThunk = (data, navigate, item) => dispatch => {
  return axios.post(`https://api-reservations.glya-corporation.uk/api/v1/appointment`, data, getConfig()).then(res => {
    console.log(res.data);
    setTimeout(() => {
      navigate(`/home/${item.name}/${item.id}`);
    }, 500);
  });
};

export const UpdateAppointmentThunk = (id, status) => dispatch => {
  return axios
    .put(`https://api-reservations.glya-corporation.uk/api/v1/appointment/${id}/update`, status, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};

export const { setAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
