/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import Human from './human.jsx';
import Robot from './robots.jsx';

const Players = ({
  players,
  hitDeck,
  start,
  changeTurn,
  turn,
  hitRobotDeck,
}) => (
  <div>
    {players.map((player) => {
      if (player.title === 'Human') {
        return (
          <Human
            turn={turn}
            changeTurn={changeTurn}
            key={player.title}
            hitDeck={hitDeck}
            info={player}
          />
        );
      } else {
        return (
          <Robot
            start={start}
            hitRobotDeck={hitRobotDeck}
            changeTurn={changeTurn}
            turn={turn}
            key={player.title}
            info={player}
          />
        );
      }
    })}
  </div>
);


Players.propTypes = {
  hitRobotDeck: PropTypes.func.isRequired,
  hitDeck: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
  changeTurn: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

export default Players;
