import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReserved } from './redux/missions/missions';
import { rocketReserve } from './redux/rockets/rockets';

const MyProfile = () => {
  const fetchedMissions = useSelector((state) => state.missionSlice);
  const reservedMissions = fetchedMissions.missions.filter(
    (mission) => mission.reserved === true,
  );

  const fetchedRockets = useSelector((state) => state.rockets);
  const reservedRockets = fetchedRockets.filter((rocket) => rocket.reserved);
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
      <div className="profile-missions">
        <h3 className="profile-title">My Rockets</h3>
        <ul className="missions-list">
          {reservedRockets.map((rocket) => (
            <li key={rocket.rocket_id}>
              <span className="mission-title">{rocket.rocket_name}</span>
              <button
                className="mission-button leave-button"
                type="button"
                onClick={() => dispatch(rocketReserve(rocket.rocket_id))}
                id={rocket.rocket_id}
              >
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
