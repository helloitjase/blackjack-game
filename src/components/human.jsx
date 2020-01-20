import React from 'react';
import Card from './card.jsx';
import CardTotal from './cardTotal.jsx';

const Human = ({
  info, hitDeck, trackTotals, changeTurn,
}) => {
  let blackjack = false;
  if (info.total === 21) {
    if (info.cards.length === 2) {
      blackjack = true;
    }
  }
  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        {info.title}
      </div>
      <div>
        {info.cards.length === 0 ? 'No cards in Hand' : info.cards.map((card, id) => <Card key={id + 1} card={card} />)}
      </div>
      <div>
        {blackjack ? 'Blackjack' : info.total < 22 ? info.total : `Busted at ${info.total}`}
      </div>
      <div>
        <button onClick={(e) => hitDeck(e, info.title)} type="button">Hit</button>
        <button onClick={changeTurn} type="button">Stay</button>
      </div>
    </div>
  );
};

export default Human;
