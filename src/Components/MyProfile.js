import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReserved } from './redux/missions/missions';

const MyProfile = () => {
  const fetchedMissions = useSelector((state) => state.missionSlice);
  const reservedMissions = fetchedMissions.missions.filter(
    (mission) => mission.reserved === true
  );
  const dispatch = useDispatch();
  return (
    <section className="profile">
      <div className="profile-missions">
        <h3 className="profile-title">My Missions</h3>
        <ul className="missions-list">
          {reservedMissions.length !== 0 ? (
            reservedMissions.map((mission) => (
              <li key={mission.mission_id}>
                <span className="mission-title">{mission.mission_name}</span>
                <button
                  className="mission-button"
                  type="button"
                  onClick={() => window.open(mission.wiki)}
                >
                  Read More
                </button>
                <button
                  className="mission-button leave-button"
                  type="button"
                  onClick={() => dispatch(updateReserved(mission.mission_id))}
                  id={mission.mission_id}
                >
                  Leave Mission
                </button>
              </li>
            ))
          ) : (
            <div className="no-missions">no missions joined</div>
          )}
        </ul>
      </div>
      <div className="profile-rockets">
        <h3 className="profile-title">My Rockets</h3>
      </div>
    </section>
  );
};

export default MyProfile;
