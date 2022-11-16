import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './redux/missions/missions';

const slices = combineReducers({
  missionSlice: missionsSlice,
});

const spaceHubStore = configureStore({ slices });

export default spaceHubStore;
