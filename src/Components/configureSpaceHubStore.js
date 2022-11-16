import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './redux/missions/missions';

const reducer = combineReducers({
  missionSlice: missionsSlice,
});

const spaceHubStore = configureStore({ reducer });

export default spaceHubStore;
