import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';

import apiUrl from '../../util/env.js';

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
  return axios.get(`${apiUrl}/appointments/client/${clientId}`, getConfig()).then(res => dispatch(setMyAppointments(res.data)));
};

export const { setMyAppointments } = clientSlice.actions;

export default clientSlice.reducer;
