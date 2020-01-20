import React from 'react';
import Players from './components/players.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{ title: 'Dealer', cards: [], total: 0 }, { title: 'Human', cards: [], total: 0 }],
    };
    this.deck = [];
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.createDeck = this.createDeck.bind(this);
    this.createRobots = this.createRobots.bind(this);
    this.dealCards = this.dealCards.bind(this);
    this.startGame = this.startGame.bind(this);
    this.hitDeck = this.hitDeck.bind(this);
    this.trackTotals = this.trackTotals.bind(this);
    this.computeTotals = this.computeTotals.bind(this);
    this.trackTotals = this.trackTotals.bind(this);
  }

  componentDidMount() {
    this.createRobots(5);
  }

  startGame() {
    this.shuffleDeck();
    this.dealCards();
    this.trackTotals();
  }

  dealCards() {
    const players = this.state.players.slice();
    for (let j = 0; j < players.length; j++) {
      if (players[j].cards.length !== 0) {
        players[j].cards = [];
      }
      for (let i = 0; i < 2; i++) {
        const card = this.deck.pop();
        players[j].cards.push(card);
      }
    }
    this.setState({
      players,
    });
  }


  computeTotals(cards) {
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
    if (totals.includes(21)) {
      return 21;
    }
    return Math.min(...totals);
  }


  trackTotals() {
    const players = [...this.state.players];
    players.forEach((player, id) => {
      player.total = this.computeTotals(player.cards);
    });
    console.log(players);
    this.setState({ players });
  }


  hitDeck(e, currPlayer) {
    const players = [...this.state.players];
    let id;
    const player = players.filter((play, idx) => {
      if (play.title === currPlayer) {
        id = idx;
        return true;
      }
    });
    const curr = player[0];
    const card = this.deck.pop();
    if (card === undefined) {
      window.alert('No cards in Deck, restart game');
    }
    curr.cards.push(card);
    players[id] = curr;
    this.setState({ players });
    this.trackTotals();
  }

  createRobots(n) {
    const robots = [];
    for (let i = 1; i <= n; i++) {
      const robot = {
        title: `Robot${i}`,
        cards: [],
        total: 0,
      };
      robots.push(robot);
    }
    this.setState((state) => ({ players: state.players.concat(robots) }));
  }

  createDeck() {
    const suites = ['♠', '♥', '♦', '♣'];
    const nonNumbs = ['A', 'K', 'Q', 'J'];
    const deck = [];
    for (let i = 0; i < nonNumbs.length; i++) {
      for (let j = 0; j < suites.length; j++) {
        deck.push(nonNumbs[i] + suites[j]);
      }
    }
    for (let i = 2; i <= 10; i++) {
      for (let j = 0; j < suites.length; j++) {
        deck.push(i + suites[j]);
      }
    }
    return deck;
  }

  shuffleDeck() {
    const deck = this.createDeck();
    for (let i = deck.length - 1; i >= 0; i--) {
      const choose = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[choose];
      deck[choose] = temp;
    }
    this.deck = deck;
  }


  render() {
    const { players, dealer } = this.state;
    return (
      <div>
        BlackJack Game!
        <Players trackTotals={this.trackTotals} start={this.startGame} hitDeck={this.hitDeck} players={players} />
      </div>
    );
  }
}

export default App;
