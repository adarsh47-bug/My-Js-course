'use strict';

// Data needed for a later exercise

const weekdaysNew = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHoursNew = {
  [weekdaysNew[3]]: {
    open: 12,
    close: 22,
  },
  [weekdaysNew[4]]: {
    open: 11,
    close: 23,
  },
  //use for accessing them "openingHours[weekdays[5]]"
  [weekdaysNew[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
//ex. ES6 Enhanced Object Literals [functions]
const add4 = function (x, y) {
  console.log(x + y);
  return x + y;
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: openingHoursNew, //idea📍 use for LEC.2
  // ES6 Enhanced Object Literals
  // openingHoursNew,
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 Enhanced Object Literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  add4,
  // fastest way to destructuring objs...
  // Making a function which takes obj as an argument and returns the desired output..
  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}..`)
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//////////<<<<<<<<<<<<<<<<<:D>>>>>>>>>>>>>>>>>>>>>>///////////////////
/*
// 23
// String Methods Practice (added lec. ES21)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}
*/
// 22
// Coding Challenge #4
/*
Write a program that receives a list of variable names written in 'underscore_case'
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase
✅
firstName
✅✅
someVariable
✅✅✅
calculateAge
✅✅✅✅
delayedDeparture
✅✅✅✅✅

// idea.Hints:
§ Remember which character defines a new
line in the textarea.

§ The solution only needs to work for a variable
made out of 2 words, like a_b

§ Start without worrying about the ✅.Tackle that only after
you have the variable name conversion working

§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK */
/*
document.querySelector('h1').textContent = 'Enter variable names written in underscore_case to convert them into camelCase.';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {

  const text = document.querySelector('textarea').value;

  const row = text.toLowerCase().split('\n');

  for (const [ix, el] of row.entries()) {
    const [first, second] = el.split('_');

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())} `.padEnd(40, ' ') + `${'✅'.repeat(ix + 1)} `
    console.log(output);

    // const i = el.indexOf('_') + 1;
    // const char = el[i].toUpperCase();
    // let neo = el.replace(`_${el[i]} `, char).trim();
    // neo = neo.padEnd(20, ' ') + `${'✅'.repeat(ix + 1)} `;
    // console.log(neo);

  }
});
*/
////////////////////////////////////////////////////////////////////////////
/*
// 21
// Working With Strings - Part 3

// idea. Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Adarsh Kadam'.split(' '));

const [firstName, lastName] = 'Adarsh Kadam'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const char of names) {
    // namesUpper.push(char[0].toUpperCase() + char.slice(1));
    namesUpper.push(char.replace(char[0], char[0].toUpperCase()))
  };
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('adarsh kadam');

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Adarsh'.padStart(25, '+').padEnd(35, '+'));
// +++++++++++Go to gate 23!++++++++++
// +++++++++++++++++++Adarsh++++++++++

// example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(345452452352562));
console.log(maskCreditCard('740345452357891'));

// Repeat
const message2 = '\nBad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)} `);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

*/
///////////////////////////////////////////////////////////////
/*
// 20
// Working With Strings - Part 2

const airLine = 'Tap Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// example Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//idea. Trimming, Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.io \n';
// 1
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// 2
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//idea. replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
//idea. 1way
console.log(announcement.replaceAll('door', 'gate'));

// 2way _regular expression
console.log(announcement.replace(/door/g, 'gate')); //'g' is global

//idea. Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the New Airbus family');

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some food and a pocket Knife')
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/
////////////////////////////////////////////////////////////////////////
/*
// 19
// Working With Strings - Part 1
const airLine = 'Tap Air Portugal';
const plane = 'A320';
console.log(airLine);
console.log(typeof airLine);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[4]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));

console.log(airLine.slice(4)); //returns new str
console.log(airLine.slice(4, 7)); //Air

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat ;(');
  else console.log('You got lucky ;D');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log('///////////////////////');

console.log(new String('Adarsh'));
console.log(typeof new String('Adarsh'));

//slice function returns a string..
console.log(new String('Adarsh').slice(2));
console.log(typeof new String('Adarsh').slice(2));

*/
///////////////////////////////////////////////////////////////////////////////////////
// 18
// Coding Challenge #3
/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

1. Create an array 'events' of the different game events that happened (no
duplicates)

2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

 GOOD LUCK
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'], //
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
console.log(gameEvents.values())
// const events = new Set([...gameEvents.values()]);
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2.
console.log(gameEvents.delete(64));
console.log(gameEvents);

// 3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  // const str = key <= 45 ? `FIRST` : `SECOND`;
  // console.log(`[${ str } HALF] ${ key }: ${ value } `);
  console.log(`[${key <= 45 ? `FIRST` : `SECOND`} HALF] ${key}: ${value} `);
};

*/
// 17
// Summary: Which Data Structure to Use?
// Collection of data
// 4 types of data structures, arr,sets,objs,maps
//todo. use "arr/sets" for simple listing of data..
//todo. use "obj/maps" for Key/Value pairs listing of data...

// */
//////////////////////////////////////////////////////////////////
/*
// 16
// Maps: Iteration

// new way to creating map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert obj to map
console.log(Object.entries(openingHoursNew));
const hoursMap = new Map(Object.entries(openingHoursNew));
console.log(hoursMap);

// loop
// quiz app
console.log(question.get('question'));
for (const [key, value] of question)
  if (typeof key === 'number') console.log(`Option ${key}: ${value} `);

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// Convert map to arr
console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log([...question.entries()]);

*/
////////////////////////////////////////////////////////////////////
/*
// 15
// Maps
// declaration
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true)); //data type matters

// example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// has,dlt,clr
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
// console.log(rest);

// arr/obj as a map keys
const arr = [1, 2]; //for accessing the ele in map
rest.set(arr, 'Test');
console.log(rest.get(arr)); //++

// DOM
rest.set(document.querySelector('h1'), 'Heading')

console.log(rest);
console.log(rest.size);

*/
///////////////////////////////////////////////////////////////
/*
// 14
// sets (ES6) , used for unique values

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
// In set variables are 'uniques' and their order is 'irrelevant'.
console.log(new Set('adarsh'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

orderSet.delete('Risotto');
console.log(orderSet);

// orderSet.clear(); // Set(0) {size: 0}

// console.log(orderSet[1]); //undefine
//fix //  there's no need for getting values out of a set,
//  because if you need it, then you will just use an array.

// Looping sets
for (const order of orderSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // using 'spread' operators
console.log(staff);
console.log(staffUnique);
console.log(new Set(staff).size); //staff is an 'array'

console.log(new Set('adarshkadam').size); //unique ele in my name

*/
//////////////////////////////////////////////////////////////////
/*
// 13
// coding challenge 2

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). HINT: Note how the odds and the game objects have the
// same property names

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
// GOOD LUCK

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [num, playerName] of game.scored.entries()) console.log(`Goal ${num + 1}: ${playerName} `);

// 2.
let sum = 0;
for (const odd of Object.values(game.odds)) sum += odd;
const len = Object.values(game.odds).length;
console.log(`Average odds = ${(sum / len).toFixed(2)} `)

// 3
for (const [nameKey, oddKey] of Object.entries(game.odds)) {
  // game[nameKey] && console.log(`Odd of victory ${ game[nameKey] }: ${ oddKey } `);
  // game[nameKey] ?? console.log(`Odd of draw: ${ oddKey } `);
  //todo// way2
  const teamStr = nameKey === 'x' ? 'draw' : `victory ${game[nameKey]} `;
  console.log(`Odd of ${teamStr}: ${oddKey} `);
}

// 4.BONUS

const scorers = {};
console.log(game.scored)
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  // scorers[player] = 0;

  console.log(scorers[player]);
}

console.log(scorers)

const a = {};
a['1a'] = 10
a['2z'] = 20
a['3x'] = 30
console.log(a)

*/
//////////////////////////////////////////////////////////////
/*
// 12
// Looping Objects: Object Keys, Values, and Entries
const { openingHours } = restaurant;
// looping over obj name or keys..
for (const day of Object.keys(openingHours)) console.log(day);

// properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Properties VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire obj
const entries = Object.entries(openingHours);
// console.log(entries);

// example
for (const [key, { open, close }] of entries) console.log(`On ${key} we open at ${open} and close at ${close} `);

*/
/////////////////////////////////////////////////////////////
/*
// 11
// Optional Chaining (?.) (ES2020)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with Optional Chaining op , conditions like nullish op
// i.e 'null/undefine' are 'false'
// if 'false' then the result will be 'undefine'..
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.order_roi?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@adarsh.io' }]
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


*/
/////////////////////////////////////////////////////////////////
// 10
// Enhanced Object Literals

/* //fix. <<<<<DON't OPEN THE COMMENTS>>>>>
// done in given codes
// 1. obj
// openingHours: openingHoursNew, //idea📍 use for LEC.2
//📍 ES6 Enhanced Object Literals [Objects]
// openingHoursNew, //fix. De-structuring of these methods is not possible

// 2. fn
// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// //📍 ES6 Enhanced Object Literals [functions]
// order(starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },
// const { order } = restaurant;
// console.log(order);

// add4(3, 3) ////fix. De-structuring of these methods is not possible
// const {add4} = restaurant; //Cannot redeclare block-scoped variable 'add4'.

const { add4: xx } = restaurant; //📍use this method..
console.log(xx(2, 2));
//idea.
// NOTE: the Methods declared out-side of obj can not be De-Structured
// But if we give them new name then they can be De-Structured
*/
// 9
// Looping Arrays: The for-of Loop (new-ES6)
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}
console.log([...menu.entries()]);
*/
// 8
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
 For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
 ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array
 ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and
 prints each of them to the console, along with the number of goals that were scored in total (number of
 player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
 WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);

// 2.1 team 1
console.log([...players1]);
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);
// 2.2 team 2
console.log([...players2]);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

// 3. allPlayers
console.log('////////////////');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. players1Final
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. game.odds
console.log(game.odds);
const { odds: { team1, x: draw, team2 }, } = game;
// const { team1, team2, x: draw } = game.odds; //both are same
console.log(team1, team2, draw);

// 6. printGoals

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. winners
console.log(team1 > team2); //f
console.log(team1 < team2); //t

// way1
const winners = ((team1 < team2) && game.team1) || ((team1 > team2) && game.team2)
console.log(`Team "${winners}" is more likely to win`);
// way2
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


*/
///////////////////////////////////////////////////////////////
/*
// 7
// Logical Assignment Operators
const rest1 = {
  name: 'adarsh',
  numGuests: 1,
};
const rest2 = {
  name: 'La mantor',
  owner: 'Lorvanni rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
//idea //assigns val only if it is "falsy"..
// rest2.numGuests ||= 10;

// nullish assignment op
//idea //assigns val only if it is "null/undefined"..
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment op
// rest1.owner = rest1.owner && '<ANONYMOUS';
// rest2.owner = rest2.owner && '<ANONYMOUS';
rest1.owner &&= '<ANONYMOUS';
//idea //assigns val only if it is "truthy"..
rest2.owner &&= '<ANONYMOUS';

console.log(rest1, rest2);

*/
////////////////////////////////////////////////////////////////
// 6
// The Nullish Coalescing Operator (??) ES2020
/*
restaurant.numGuests = 0; //err ,if 0 then also 10,
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish : null and undefined (NOT 0 or '' or false)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
//////////////////////////////////////////////////////////////
/*
// 5
// Short Circuiting (&& and ||)
// Logical operators : So first, they can use any data type.
// They can return any data type
// and they do something
// called short-circuiting,
// or as we also call it short circuit evaluation.
console.log(`----OR ----`);
console.log(3 || 'a');
//if 3 is t then the operator will not even look at second operator , i.e. short-circuiting..
console.log('' || 'a');
console.log(true || 0);
console.log(undefined || null); // returns null , even if both the val are falsy val
console.log(undefined || 0 || '' || "hello" || 22 || null);

// restaurant.numGuests = 0; //err ,if 0 then also 10,
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`----AND ----`);
console.log(0 && 'adu');
console.log(5 && 'cao');

console.log('hello' && 23 && null && 'aft');

// pr example
console.log(restaurant.orderPizza);
// if (restaurant.orderPizza) restaurant.orderPizza('cheese', 'corn');
restaurant.orderPizza && restaurant.orderPizza('cheese', 'corn');
*/
//////////////////////////////////////////////////////////////////////////
/*
// 4
// Rest Pattern and Parameters

// 4.1 destructuring

// SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, b/c on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

console.log([...restaurant.mainMenu, ...restaurant.starterMenu,]);
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,];
console.log(pizza, risotto, otherFood);

// objects , in obj order does not matter i.e opposite of arrays..
console.log(restaurant.openingHours);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 4.2 Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);  // example

console.log(restaurant.orderPizza);
restaurant.orderPizza('red chile', 'mushrooms', 'onions', 'garlic', 'tomato', 'corn');
restaurant.orderPizza('mushrooms');

// */
////////////////////////////////////////////////////////////////
/*
// 3
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //1--
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //2++
console.log(newArr); // (5) [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9);

console.log('///////////////////');
console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// shallow Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...newMenu, ...mainMenuCopy];
console.log(menu);

// Iterables : arrays, strings, maps, sets, NOT objs
const str = 'Adarsh';
const letters = [...str, '', '!'];
console.log(letters);
console.log(...str);

// tsc📍 spread operator can be used in arr or giving arg to functions...
// console.log(`${...str } akm`); //fix: In this many input are not expected , so err

// using spread operator in functions
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'adarsh' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //shallow cpy
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/////////////////////////////////////////////////////////////////////////////////////////////
// 2
// Destructuring Objects
/*
// 6.fastest way to destructuring objs...
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

// 6.1 default values are taken for un-declared values
restaurant.orderDelivery({
  address: 'Via del Sole,21',
  starterIndex: 1,
});

// 1.Normal destructuring of obj
console.log(restaurant);
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// 2.Setting different names to the given variables in obj
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// 3.Setting Default values to the variables of obl
console.log('//////////////////////////////');
// restaurant.menu
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 4.Mutating variables by using dest-obj
let a = 111;
let d = 999;
console.log(a, d);
const obj = { a: 23, b: 7, c: 14 };
({ a, b: d } = obj);
console.log(a, d);

// 5.Accessing variables of Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

*/
///////////////////////////////////////////////////////////////////////////////////
/*
// 1
//idea. Destructuring Arrays

// ex.1
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// ex.2
console.log(restaurant.categories);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//📍 Switching variables 
// 1.1
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// 1.2
[main, secondary] = [secondary, main];
console.log(main, secondary); //📍<<<*>>>\\

// Receive 2 return values from a function i.e. [a,b]
console.log(restaurant.order);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter);
console.log(mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/