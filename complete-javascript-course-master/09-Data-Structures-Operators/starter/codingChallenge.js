'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const properties = Object.values(game.scored);
for (const name of properties) {
  console.log(name);
}

const oddAverge = Object.values(game.odds);
// console.log(oddAverge);

for (const odd of oddAverge) {
  console.log(odd);
  let sum = 0;
  sum += odd;
  console.log(sum);
  let averge = sum / oddAverge.length;
  console.log(averge);
}

/*
// const player1 = game.players[0];
// const player2 = game.players[1];
const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
const allPlayer = [...player1, ...player2];
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
  console.log(`${players}`);
};

// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal(...game.scored);

team1 < team2 && console.log('Team1 is more likely to win');

team1 > team2 && console.log('Team2 is more likely to win');
console.log(team1, team2);*/
