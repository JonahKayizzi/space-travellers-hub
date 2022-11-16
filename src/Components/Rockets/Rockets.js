// import './Rockets.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(fetchRockets());
    }
  });
  return (
    <div>
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} />
      ))}
    </div>
  );
};

export default Rockets;
