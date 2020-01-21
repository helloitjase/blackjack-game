import React from 'react';
import PropTypes from 'prop-types';
import Card from './card.jsx';

const Human = ({
  info: {
    title,
    cards,
    total,
  },
  hitDeck,
  changeTurn,
}) => {
  let blackjack = false;
  if (total === 21) {
    if (cards.length === 2) {
      blackjack = true;
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
      <div>
        <button onClick={hitDeck} type="button">Hit</button>
        <button onClick={changeTurn} type="button">Stay</button>
      </div>
    </div>
  );
};

Human.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  hitDeck: PropTypes.func.isRequired,
};
export default Human;
