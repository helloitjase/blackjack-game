import React from 'react';
import Card from './card.jsx';

const Dealer = ({ info, start, trackTotals }) => {
  const hi = 'hi';
  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        {info.title}
      </div>
      <div>
        {info.cards.length === 0 ? 'No cards in Hand' : info.cards.map((card, id) => <Card key={id + 1} card={card} />)}
      </div>
      <div>
        {info.total}
      </div>
      <div>
        <button onClick={start} type="button">Start Game</button>
      </div>
    </div>
  );
};

export default Dealer;
