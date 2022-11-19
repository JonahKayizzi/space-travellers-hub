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
  reducers: {
    rocketReserve: (state, action) => state.map((rocket) => {
      if (rocket.rocket_id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
const { rocketReserve } = actions;
export { actions, fetchRockets, rocketReserve };
export default reducer;
