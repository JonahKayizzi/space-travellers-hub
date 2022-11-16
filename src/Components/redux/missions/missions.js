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
  reducers: {
    updateReserved: (state, action) => ({
      ...state,
      missions: state.missions.map((thisMission) => {
        if (thisMission.mission_id === action.payload) {
          return {
            ...thisMission,
            reserved: !thisMission.reserved,
          };
        }
        return thisMission;
      }),
    }),
  },
  extraReducers: {
    [fetchMissons.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.missions = action.payload.map((mission) => ({
        ...state.missions,
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    },
  },
});

export const { updateReserved } = missionsSlice.actions;

export default missionsSlice.reducer;
