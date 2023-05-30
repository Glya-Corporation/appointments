import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    setLoader: (state, actions) => {
      return actions.payload;
    }
  }
});

export const setLoaderThunk = isShow => dispatch => {
  dispatch(setLoader(isShow));
};

export const { setLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
