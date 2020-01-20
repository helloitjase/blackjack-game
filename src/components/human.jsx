import React from 'react';
import Card from './card.jsx';
import CardTotal from './cardTotal.jsx';

const Human = ({ info, hitDeck, trackTotals }) => {
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
        {info.total}
      </div>
      <div>
        <button onClick={(e) => hitDeck(e, info.title)} type="button">Hit</button>
        <button type="button">Stay</button>
      </div>
    </div>
  );
};

export default Human;
