import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

const apiUrl = import.meta.env.VITE_API_URL;

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
    .get(`${apiUrl}/appointments/business/${businessId}`, getConfig())
    .then(res => dispatch(setAppointments(res.data)))
    .catch(err => console.error(err));
};

export const createAppointmentThunk = (data, navigate, item) => dispatch => {
  return axios.post(`${apiUrl}/appointment`, data, getConfig()).then(res => {
    console.log(res.data);
    setTimeout(() => {
      navigate(`/home/${item.name}/${item.id}`);
    }, 500);
  });
};

export const UpdateAppointmentThunk = (id, status) => dispatch => {
  return axios
    .put(`${apiUrl}/appointment/${id}/update`, status, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};

export const { setAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
