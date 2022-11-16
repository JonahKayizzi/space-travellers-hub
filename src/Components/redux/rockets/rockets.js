import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsList = await response.json();
  return rocketsList;
});
const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
export { actions, fetchRockets };
export default reducer;
