import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReserved } from './redux/missions/missions';

const Missions = () => {
  const fetchedMissions = useSelector((state) => state.missionSlice);
  const dispatch = useDispatch();

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
          <tr
            className={mission.reserved ? 'reserved' : 'unreserved'}
            key={mission.mission_id}
          >
            <td className="ms-name-col">{mission.mission_name}</td>
            <td className="ms-desc-col">{mission.description}</td>
            <td className="ms-status-col">
              <p className="mission-status">
                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </p>
            </td>
            <td className="ms-btn-col">
              <button
                className="mission-button"
                type="button"
                onClick={() => dispatch(updateReserved(mission.mission_id))}
                id={mission.mission_id}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
