import { createAsyncThunk, createSlice } from '@reduxjs/tookit';
import axios from 'axios';
import types from '../types/types';

const initialState = {
  missions: [],
};

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissons = createAsyncThunk(
  types.MISSIONS_FETCHED,
  async (thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const missionsSlice = createSlice({
  name: 'missionSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissons.fulfilled]: (state, action) => {
      Object.assign(state, action.payload);
      console.log(state.missions);
    },
  },
});

export default missionsSlice;
