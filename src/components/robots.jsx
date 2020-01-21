import React from 'react';
import Card from './card.jsx';


const Robot = ({
  info,
  turn,
  changeTurn,
  hitDeck,
  start,
}) => {
  let blackjack = false;
  if (info.total === 21) {
    if (info.cards.length === 2) {
      blackjack = true;
    }
  }
  if (turn === info.title) {
    if (info.total >= 17) {
      console.log(info.title, info.total);
      changeTurn();
    } else if (info.total < 17) {
      hitDeck(null, info.title);
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
      <div>{ info.title === 'Dealer' ? <button onClick={start} type="button">Start Game</button> : ''}</div>
    </div>
  );
};

export default Robot;
