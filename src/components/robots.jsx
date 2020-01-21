import React from 'react';
import PropTypes from 'prop-types';
import Card from './card.jsx';

const Robot = ({
  info: {
    title,
    cards,
    total,
  },
  turn,
  changeTurn,
  hitRobotDeck,
  start,
}) => {
  let blackjack = false;
  if (total === 21) {
    if (cards.length === 2) {
      blackjack = true;
    }
  }
  if (turn === title) {
    if (total >= 17) {
      changeTurn();
    } else if (total < 17) {
      hitRobotDeck(title);
    }
  }
  const display = total < 22 ? total : `Busted at ${total}`;
  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        {title}
      </div>
      <div>
        {cards.length === 0 ? 'No cards in Hand' : cards.map((card, id) => <Card key={id + 1} card={card} />)}
      </div>
      <div>
        {blackjack ? 'Blackjack' : display}
      </div>
      <div>{ title === 'Dealer' ? <button onClick={start} type="button">Start Game</button> : ''}</div>
    </div>
  );
};


Robot.propTypes = {
  turn: PropTypes.string.isRequired,
  changeTurn: PropTypes.func.isRequired,
  hitRobotDeck: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

export default Robot;
