import React from 'react';
import Card from './card.jsx';
import CardTotal from './cardTotal.jsx';

const Robot = ({ info, trackTotals }) => {
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
        {/* <CardTotal cards={info.cards} /> */}
      </div>
    </div>
  );
};

export default Robot;
