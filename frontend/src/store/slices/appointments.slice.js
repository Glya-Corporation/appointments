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
  return axios.get(`${apiUrl}/appointments/business/${businessId}`, getConfig()).then(res => dispatch(setAppointments(res.data)));
};

export const createAppointmentThunk = data => (dispatch) => {
    return axios.post(`${apiUrl}/appointment`, data, getConfig()).then(res => console.log(res.data));

}

export const { setAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
