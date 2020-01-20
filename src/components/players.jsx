/* eslint-disable no-else-return */
import React from 'react';
import Human from './human.jsx';
import Robot from './robots.jsx';
import Dealer from './dealer.jsx';

const Players = ({
  players, hitDeck, start, trackTotals, changeTurn, turn,
}) => {
  const hi = 'hi';
  console.log(turn);
  return (
    <div>
      {players.map((player) => {
        if (player.title === 'Human') {
          return <Human turn={turn} changeTurn={changeTurn} trackTotals={trackTotals} key={player.title} hitDeck={hitDeck} key={player.title} info={player} />;
        } else if (player.title === 'Dealer') {
          return <Dealer turn={turn} hitDeck={hitDeck} trackTotals={trackTotals} key={player.title} start={start} info={player} />;
        } else {
          return <Robot trackTotals={trackTotals} key={player.title} info={player} />;
        }
      })}
    </div>
  );
};

export default Players;
