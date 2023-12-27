
const players =
  [{ name: 'John', hand: '' },
  { name: 'Paul', hand: '' },
  { name: 'George', hand: '' },
  { name: 'Ringo', hand: '' }];




const cards = [
  { rank: '2', suit: 'spades' },
  { rank: '3', suit: 'spades' },
  { rank: '4', suit: 'spades' },
  { rank: '5', suit: 'spades' },
  { rank: '6', suit: 'spades' },
  { rank: '7', suit: 'spades' },
  { rank: '8', suit: 'spades' },
  { rank: '9', suit: 'spades' },
  { rank: '10', suit: 'spades' },
  { rank: 'J', suit: 'spades' },
  { rank: 'Q', suit: 'spades' },
  { rank: 'K', suit: 'spades' },
  { rank: 'A', suit: 'spades' },
  { rank: '2', suit: 'hearts' },
  { rank: '3', suit: 'hearts' },
  { rank: '4', suit: 'hearts' },
  { rank: '5', suit: 'hearts' },
  { rank: '6', suit: 'hearts' },
  { rank: '7', suit: 'hearts' },
  { rank: '8', suit: 'hearts' },
  { rank: '9', suit: 'hearts' },
  { rank: '10', suit: 'hearts' },
  { rank: 'J', suit: 'hearts' },
  { rank: 'Q', suit: 'hearts' },
  { rank: 'K', suit: 'hearts' },
  { rank: 'A', suit: 'hearts' },
  { rank: '2', suit: 'clubs' },
  { rank: '3', suit: 'clubs' },
  { rank: '4', suit: 'clubs' },
  { rank: '5', suit: 'clubs' },
  { rank: '6', suit: 'clubs' },
  { rank: '7', suit: 'clubs' },
  { rank: '8', suit: 'clubs' },
  { rank: '9', suit: 'clubs' },
  { rank: '10', suit: 'clubs' },
  { rank: 'J', suit: 'clubs' },
  { rank: 'Q', suit: 'clubs' },
  { rank: 'K', suit: 'clubs' },
  { rank: 'A', suit: 'clubs' },
  { rank: '2', suit: 'diamonds' },
  { rank: '3', suit: 'diamonds' },
  { rank: '4', suit: 'diamonds' },
  { rank: '5', suit: 'diamonds' },
  { rank: '6', suit: 'diamonds' },
  { rank: '7', suit: 'diamonds' },
  { rank: '8', suit: 'diamonds' },
  { rank: '9', suit: 'diamonds' },
  { rank: '10', suit: 'diamonds' },
  { rank: 'J', suit: 'diamonds' },
  { rank: 'Q', suit: 'diamonds' },
  { rank: 'K', suit: 'diamonds' },
  { rank: 'A', suit: 'diamonds' },
];
const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray)


function dealCard() {
  return cards.pop();
}

const player1 = players[0];
const player2 = players[1];
const player3=players[2];
const player4=players[3];

for (let i = 0; i < 8; i++) {
  Object.entries(player1).push(dealCard());
  Object.entries(player2).push(dealCard());
  Object.entries(player3).push(dealCard());
  Object.entries(player4).push(dealCard())
}

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
