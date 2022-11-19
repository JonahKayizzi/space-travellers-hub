import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="card flex">
      <div className="flickr">
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </div>

      <div className="content">
        <div>
          <span className="rocket-name">{rocket.rocket_name}</span>
        </div>
        <div className="description">
          {rocket.reserved ? <span className="badge">Reserved</span> : ''}
          <span>{rocket.description}</span>
        </div>
        <button type="submit" className={rocket.reserved ? 'reserved' : 'not-reserved'} onClick={() => dispatch(rocketReserve(rocket.rocket_id))}>
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
