import React from 'react';

const CardTotal = ({ cards }) => {
  const totals = [];
  totals[0] = 0;
  for (let i = 0; i < cards.length; i++) {
    const num = cards[i].slice(0, -1);
    let add = 0;
    if (num === 'A') {
      const len = totals.length;
      for (let j = 0; j < len; j++) {
        const temp = totals[j];
        totals[j] += 1;
        totals.push(temp + 11);
      }
    } else if (num === 'K' || num === 'Q' || num === 'J') {
      add += 10;
    } else {
      add = Number(num);
    }
    for (let j = 0; j < totals.length; j++) {
      totals[j] += add;
    }
  }
  const bust = totals.every((total) => total > 21);
  let busted;
  if (bust) {
    busted = Math.min(...totals);
  }
  const minTotal = Math.min(...totals);
  console.log(totals);
  return (
    <div>
      {bust ? `Busted at ${busted}` : minTotal}
    </div>
  );
};

export default CardTotal;
