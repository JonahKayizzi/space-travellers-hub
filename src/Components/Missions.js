import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissons } from './redux/missions/missions';

const Missions = () => {
  const fetchedMissions = useSelector((state) => state.missionSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissons());
  }, []);

  return (
    <>
      {fetchedMissions.missions.map((mission) => (
        <p key={mission.mission_id}>{mission.mission_name}</p>
      ))}
    </>
  );
};

export default Missions;
