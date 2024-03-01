const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// 📍 Freeze does not make deep clone 
budget[0].value = 100000; // so we can mutate the deep variables
// budget[9].value = 900000; // but can't add new onces

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // making immutable
// spendingLimits.jay = 200; //err

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :D
const addExpense = function (
  state, limits, value, description, user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return (value <= getLimit(limits, cleanUser)) ? [...state, { value: -value, description, user: cleanUser }] : state;
  // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return (entry.value < -getLimit(limits, entry.user)) ? { ...entry, flag: 'limit' } : entry;
//   });
//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user))
//   //     entry.flag = 'limit';
// };

// pure function 
const checkExpenses = (state, limits) =>
  state.map(entry =>
    (entry.value < -getLimit(limits, entry.user))
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

console.log(newBudget3);

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const entry of budget)
//     output += (entry.value <= -bigLimit) ?
//       `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

const logBigExpenses = (bigLimit, state) => {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
};


console.log(budget);
logBigExpenses(100, budget);

