import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {},
  reducers: {
    setSchedule: (state, actions) => {
      return actions.payload;
    }
  }
});

export const setScheduleThunk = service => dispatch => {
  dispatch(setSchedule(service));
};


export const { setSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
