import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './redux/missions/missions';
import rocketsSlice from './redux/rockets/rockets';

const reducer = combineReducers({
  missionSlice: missionsSlice,
  rockets: rocketsSlice,
});

const spaceHubStore = configureStore({ reducer });

export default spaceHubStore;
