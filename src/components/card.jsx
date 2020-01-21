import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { card } = props;
  return (
    <span>
      {card}
    </span>
  );
};

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Card;
