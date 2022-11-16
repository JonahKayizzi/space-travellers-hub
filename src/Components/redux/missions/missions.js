import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const initialState = {
  missions: [],
};

const URL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissons = createAsyncThunk(
  types.MISSIONS_FETCHED,
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const missionsSlice = createSlice({
  name: 'missionSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissons.pending]: () => {},
    [fetchMissons.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.missions = action.payload;
    },
  },
});

export default missionsSlice.reducer;
