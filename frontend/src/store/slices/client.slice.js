import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

const apiUrl = import.meta.env.VITE_API_URL;

export const clientSlice = createSlice({
  name: 'client',
  initialState: [],
  reducers: {
    setMyAppointments: (state, actions) => {
      return actions.payload;
    }
  }
});

export const getAllAppointmentsClientThunk = clientId => dispatch => {
  return axios.get(`${apiUrl}/api/v1/appointments/client/${clientId}`, getConfig()).then(res => dispatch(setMyAppointments(res.data)));
};

export const { setMyAppointments } = clientSlice.actions;

export default clientSlice.reducer;
