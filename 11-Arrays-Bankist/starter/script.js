'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 6
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movSort.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}₹</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });

}

// 12

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} INR`;
}

// 14
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((_acc, int) => _acc + int, 0)
  labelSumInterest.textContent = `${interest.toFixed(2)}₹`
}

// 10 
const createUsernames = function (accs) {
  //it is making sideEffect i.e. mutation of accounts obj
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0]) //allow us to create new simple array
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc)

  // Display summary
  calcDisplaySummary(acc)
}
// 17
// Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome msg.
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]} `;

    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
})

// 18
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
})

// 19
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // .indexOf(element)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

// 20
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 1 Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //use this when need to chain multiple methods
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2)); //'Mutates' the arr
arr.splice(-1);
console.log(arr);
arr.splice(1, 2)

console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'k', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); //'Mutates' the array...

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

// OTHER METHODS: push,pop,shift,unshift,indexOf,includes
*/
// 2
// The new at Method
/*

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //for method chaining

console.log('Adarsh'.at(0)); //Also works on strings
*/
// 3
// Looping Arrays: forEach
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${ i + 1 }: You deposited ${ movement } `);
  } else {
    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) } `);
  }
}

// forEach is a Higher Order fn, so we need to pass a callBack fn to it...
console.log('---- FOREACH -----');
// order of arg matters
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${ i + 1 }: You deposited ${ mov } `);
  } else {
    console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(mov) } `);
  }
});
//📍'Continue' and 'Break' keywords are not functional in forEach loop
*/
// 4
// forEach With Maps and Sets
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// MAPS
currencies.forEach(function (val, i, map) {
  console.log(val, i, map);
});

// SETS
const currenciesUnique = new Set(['USD', 'INR', 'USD', 'INR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (val, _, map) {
  console.log(val, val, map); //set don't have index/keys
});
*/

// 5
// PROJECT: "Bankist" App
// refer: flow chart


// 7
// coding challenge 1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
�
 4. Run the function for both test datasets
Test data:
")
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far
*/
// solution:
/*

const checkDogs = function (dogsJulia, dogsKate) {
  const cpyJuliaArr = dogsJulia.slice(1, -2);
  // console.log(dogsJulia);
  const arrBoth = cpyJuliaArr.concat(dogsKate);
  console.log(arrBoth);
  arrBoth.forEach((age, i) => {
    const str = age >= 3 ? `an adult, and is ${ age } year old` : 'still a puppy 🐶';
    console.log(`Dog number ${ i + 1 } is ${ str } `);
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// 8
// Data Transformations: map, filter, reduce
// refer.pdf

// 9
// The map Method
/*
// use for non-sideEffective process....i.e returning arrays
// not for console or any stuff like that.
// returns new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// })
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  // console.log(mov);
  if (mov > 0) {
    return `Movement ${ i + 1 }: You deposited ${ mov } `;
  } else {
    return `Movement ${ i + 1 }: You withdrew ${ Math.abs(mov) } `;
  }
});

console.log(movementsDescriptions);

*/
// 11
// The filter Method
/*

const deposits = movements.filter(function (mov) {
  return mov > 0; //return a boolean value
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
// 12
// The reduce Method
/*

console.log(movements);
// In callback fn of reduce method,
// The order of arguments is: (accumulator(sum),val,i,arr)
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${ i }: ${ acc } `);
//   return acc + cur;
// }, 0); // 0 is a default value

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

*/
// 13
// coding challenge 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/
/*
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(dogAge => {
    if (dogAge <= 2) return 2 * dogAge;
    else return 16 + 4 * dogAge;
  })
  const adults = humanAges.filter(ageF => ageF > 18);
  // const avgAge = adults.reduce((acc, cur) => acc + cur, 0) / (adults.length);
  const avgAge = adults.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
  console.log(humanAges, adults, avgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

// 14
// The Magic of Chaining Methods
/*
const inrToUsd = 80

// PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * inrToUsd).reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD);
*/

// 15
// coding challenge 3
/*

const calcAverageHumanAge = dogAges => dogAges
  .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge)
  .filter(ageF => ageF > 18)
  .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);


console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// 16
// The find Method
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
// 1
console.log(accounts);
const account = accounts.find(acc => acc.owner === "Jessica Davis")
console.log(account);
// 2

// let account;
// for (const acc of accounts) {
//   // console.log(acc.owner);
//   if (acc.owner === "Jessica Davis") {
//     account = acc;
//     break;
//   }
// }
// console.log(account);

// // 3 //err code
// let account;
// accounts.forEach(acc => (acc.owner === "Jessica Davis") ? acc : acc);
// console.log(account);
*/
// 17
// Implementing Login
// 18
// Implementing Transfers
// 20
//idea. SOME and every
/*
console.log(movements);
console.log(movements.includes(-130)); //test only for 'equality'

// test for 'condition'
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//idea. EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callBack
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// 21
// flat and flatMap
/*
// FLAT

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // 2 is the depth

// ex
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FLAT-MAP
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) //here depth is only 1
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

// 22
// Sorting Arrays
/*
// Don't use sort on mix-string/number...

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); //mutates the original array

// Numbers
console.log(movements);

// A, B
// return <= 0, A, B (Keep order)
// return > 0, B, A (Switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => b - a);
console.log(movements);

*/
// 23
// More Ways of Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7];0
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arr + Fill method
const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// x.fill(1); //[ 1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3); //[empty × 3, 1, 1, 1, 1]
x.fill(1, 3, 5); //[empty × 3, 1, 1,empty × 2]
// console.log(x);

// Filled arr + Fill method
arr.fill(22, 2, 6);
// console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// EX. gen 100 random dive rolls
const arrDiceRolls = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
// console.log(arrDiceRolls);
const setArr = [...new Set(arrDiceRolls)].sort();
// console.log(setArr);

//
console.log(document.querySelectorAll('.movements__value'));
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (el => el.textContent.replace('₹', '')));
  console.log(movementsUI);
})
*/
// 24
// Array Methods Practice
/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0)
console.log(bankDepositSum);

// 2.
// way1
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// way2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => mov >= 1000 ? ++count : count, 0)

// console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));
console.log(numDeposits1000);

let a = 10;
console.log(a++);
console.log(++a);

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => {
    // cur > 0 ? acc.deposits += cur : acc.withdrawals += cur;
    acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return acc;
  }, { deposits: 0, withdrawals: 0 })
console.log(sums);

// 4.
// convert into title case-> This Is a Nice Title.

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word.replace(word[0], word[0].toUpperCase())).join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

// 25
// coding challenge 4
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const eatingDog = function (dog) {
  if (((1.1 * dog.recommendedFood) > dog.curFood) && ((0.9 * dog.recommendedFood) < dog.curFood)) return 'Ok';
  else return (dog.curFood > dog.recommendedFood) ? 'Too much' : 'Too little';
};

// 1.
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** (0.75) * 28));
console.log(dogs);

// 2.
const z = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(eatingDog(z));

// 3.

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// dogs.forEach(dog => {
//   (eatingDog(dog) === 'Too much') && ownersEatTooMuch.push(dog.owners);
//   eatingDog(dog) === 'Too little' && ownersEatTooLittle.push(dog.owners);
// })
// console.log(ownersEatTooLittle.flat(), ownersEatTooMuch.flat());

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle, ownersEatTooMuch);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.

// console.log(dogs.map(dog => dog.curFood === dog.recommendedFood).includes(true));
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingDog = dog => eatingDog(dog) === 'Ok';
console.log(dogs.some(checkEatingDog));

// 7.
console.log(dogs.filter(checkEatingDog));

// 8.
console.log(dogs);
const shallowCpyDogs = dogs.slice().sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log(shallowCpyDogs);

*/

