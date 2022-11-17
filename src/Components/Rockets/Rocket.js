import PropTypes from 'prop-types';

const Rocket = (props) => {
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
          <span>{rocket.description}</span>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Rocket;
