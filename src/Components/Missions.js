import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissons } from './redux/missions/missions';

const Missions = () => {
  const fetchedMissions = useSelector((state) => state.missionSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissons());
  }, []);

  const handleJoin = () => {};

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {fetchedMissions.missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="ms-name-col">{mission.mission_name}</td>
            <td className="ms-desc-col">{mission.description}</td>
            <td className="ms-status-col">
              <p className="mission-status">{mission.status}</p>
            </td>
            <td className="ms-btn-col">
              <button
                className="mission-button"
                type="button"
                onClick={handleJoin}
                id={mission.mission_id}
              >
                {mission.action}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
