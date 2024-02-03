// 1 <<<<<<<<<<<<<<<<<STRICT mode>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
"use strict";
//secure js code , should be 1st statement ,
// 1. avoids errors,bugs & 2.visible error which are silent

// let hasDriversLicense = false;
// const passTest = true;
// // reo = 10;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');
// console.log(reo)
// console.log(typeof (reo))
// const interface = '1'; // strict reserve word

// 2
// <<<<<<<<<<<<<<<<<<<<FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// declaration
// function logger() {
//     console.log('My name is Adarsh');
// }
// logger(); //call , running , invoking fun

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(5, 0.1));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('22'); //built-in  function

// 3
// // function declaration >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log(calcAge1(1900)); //arg
// function calcAge1(birthYear) { //parameter
//     return 2024 - birthYear;
// }

// // const age2 = calcAge2(1991); //ERROR for functions which are set as values
// //some hoisting thing is involved

// //function expressions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }
// console.log(calcAge1(1900), calcAge2(1930));

// const c = function () {
//     // return 1;
// }
// console.log(typeof (c)); //in js fun are just values like int , bool, and etc

// 4
// // Arrow function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // good for one liner functions.
// // 1 parameter

// const calAge3 = birthYear => 2024 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// // 2 para
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1991, 'Adarsh'));
// console.log(yearsUntilRetirement(1999, 'Aoh'));

// 5
// // functions calling other functions

// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// };
// console.log(fruitProcessor(3, 4));

// 6
//review

// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log("hero000"); // not-ignored
//         return retirement;
//         // console.log("hero"); // ignored
//         // return `${firstName} retires in ${retirement} years.`
//     } else {
//         return -1;
//         // console.log("heroin"); //ignored
//     }
// }
// console.log(yearsUntilRetirement(1999, 'Adu'));
// console.log(yearsUntilRetirement(1909, 'Adu'));

// 7 ex
// const calcAverage = function (p1, p2, p3) {
//     return (p1 + p2 + p3) / 3;
// }
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (scoreDolphins, scoreKoalas) {
//     if ((scoreDolphins >= (2 * scoreKoalas))) {
//         console.log(`Dolphins win(${scoreDolphins} vs. ${scoreKoalas})`);
//     } else if (((2 * scoreDolphins) <= scoreKoalas)) {
//         console.log(`Dolphins win(${scoreKoalas}) vs. ${scoreDolphins}`);
//     } else {
//         console.log(`No team wins`)
//     }
// }
// checkWinner()

// 8
// array
// const friends = ['adarsh', 'vijay', 'kadam'];
// const y = new Array(1990, 1991, 1992, 1993); //2nd way

// console.log(friends);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'roy'; //in js only primitive value are non-mutable ,
// console.log(friends); // for ex. ele of array can not as they are non-primitive i.e mutable
// // friends = ['bob', 'tot0']; //error

// const hi = 'hello';
// const jonas = [hi, 'akm', 33 - 23, 'tech', friends];

// // exercise
// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }
// const years = [1990, 1991, 1992, 1993, 1994];

// // console.log(calcAge(years));
// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[2]);
// // const age4 = calcAge(years[3]);
// // const age5 = calcAge(years[4]);
// console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4]));

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
// console.log(ages);

// 9
const friends = ['adarsh', 'vijay', 'kadam'];

// // add elements
// const len = friends.push('Jay');  //adds element on the last position of array
// console.log(len); //$returns new length of array

// let x = friends.unshift('Jay'); //adds element on the 1st position of array
// console.log(x);

// friends.unshift('Jadu'); //also $returns the new length of array
// console.log(friends)
// // // remove elements
// friends.pop(); //last ele pop
// const popped = friends.pop(); //popped ele is stored
// console.log(popped);

// friends.shift(); //first ele removed and shifted ele is stored

// // // getting index
// console.log(friends.indexOf('bob'));
// console.log(friends.indexOf('vijay'));

// // includes
// friends.push(23);
// console.log(friends.includes('adarsh'));
// console.log(friends.includes('bob'));
// console.log(friends.includes('23')); //f
// console.log(friends.includes(23)); //t

// if (friends.includes('adarsh')) {
//     console.log('You have a friend called adarsh.');
// }

// 10 -challenge
// let tip;
// function calcTip(bill) {
//     if ((300 > bill) && (bill > 50)) {
//         tip = 15;
//         return (bill * (15 / 100));
//     } else {
//         tip = 20;
//         return (bill * (20 / 100));
//     }
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// for (let index = 0; index < tips.length; index++) {
//     calcTip(bills[index]);
//     console.log(`${tip}% of ${bills[index]} should be ${tips[index]}, therefore total is ${totals[index]}`);
// }

// 11
// //REVIEW objects
// const jonasArray = [
//     'jonas',
//     'adarsh',
//     2033 - 1999,
//     'student',
//     ['akm', 'm416', 'groza']
// ];

// //obj using {} is called obj literal syntax
const jonas = {
    firstName: 'Adarsh',
    lastName: 'Kadam',
    job: 'Student',
    age: 2024 - 2003,
    friends: ['x', 'y', 'z']
};

// // used for unordered data

// console.log(jonas);
// // dot notation
// console.log(jonas.lastName);
// // brackets notation
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// // console.log(jonas.'first' + nameKey); //FIXME err

// const interestedIn = prompt('What do you want to know about Adarsh? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas.interestedIn);  // FIXME undefine ex. interestedIn = 'firstName' and jonas.'firstName' is incorrect syntax!!!!!
// console.log(jonas[interestedIn]); //correct output

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'India'; //+
// jonas['twitter'] = '@adarshkadam'; //+
// console.log(jonas);

// challenge
// "jonas has 3 friends, and his best friend is called z"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends ${jonas.friends[0]}, ${jonas.friends[1]}, & ${jonas.friends[2]}, and his best friend is called ${jonas.friends[2]}`);

// 12
// obj methods
// we can add functions to obj

// const jonas = {
//     firstName: 'Adarsh',
//     lastName: 'Kadam',
//     job: 'Student',
//     birthYear: 2003,
//     friends: ['x', 'y', 'z'],
//     hasDriversLicense: false,
//     // calcAge: function (birthYear) {
//     //     return 2024 - birthYear;
//     // }  //>>>>>>>>1
//     // calcAge: function () {
//     //     console.log(this);  // this -->>> implies the present object.
//     //     return 2024 - this.birthYear;
//     // }  //>>>>>>>>2
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;  // new ele created
//         return this.age;
//     },  //>>>>>>>>3
//     // const calcAge = function (birthYear) {
//     //     return 2024 - birthYear;
//     // } //err
//     // function calcAge(birthYear) {
//     //     return 2024 - birthYear;
//     // } //err

//     getSummery: function () {
//         // return (this.firstName + " is a " + this.age + " Y/O " + this.job + ", and he has " + (this.hasDriversLicense ? 'a' : 'no') + " driver's license.");
//         return (`${this.firstName} is a ${this.calcAge()} Y/O ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);
//     }


// };
// console.log(jonas.calcAge(jonas.birthYear)); //1
// console.log(jonas['calcAge'](jonas.birthYear)); //1

// console.log(jonas.calcAge()); //2
// console.log(jonas['calcAge']()); //2


// console.log(jonas.calcAge()); //3.1
// console.log(jonas.age); //3.2 will give output only if 3.1 is also active simultaneously....

// challenge
// "'Jonas' is a '44'-Y/O 'teacher', and he has 'a/no' driver's license"
// console.log(jonas.getSummery());


// 12
// coding challenge-#3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`)
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`)
// }

// 13
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }

// 14
// Looping Arrays, Breaking and Continuing
/*
const jonasArray = [
    'jonas',
    'adarsh',
    2033 - 1999,
    'student',
    ['akm', 'm416', 'groza']
];
const type = [];
for (let i = 0; i < jonasArray.length; i++) {
    // reading
    console.log(jonasArray[i], typeof jonasArray[i]);

    // filling types array-1
    type[i] = typeof jonasArray[i];
};
console.log(type);

const years = [1991, 1999, 1992, 1990];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // ages[i] = 2024 - years[i];
    ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
console.log('---only strings---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
};

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
};
*/

// 15
// Looping Backwards and Loops in Loops

// const jonasArray = [
//     'jonas',
//     'adarsh',
//     2033 - 1999,
//     'student',
//     ['akm', 'm416', 'groza']
// ];

// // Looping Backwards
// for (let i = (jonasArray.length) - 1; i >= 0; i--) {
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----------------Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 💪`);
//     }
// };

// 16
// while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
// for (; dice != 6;) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// 17
// challenge 4
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//         tips.push(calcTip(bills[i]));
//         totals.push(bills[i] + tips[i]);
//         console.log(bills[i], tips[i], totals[i]);
//     }

//bonus-challenge
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
// console.log(calcAverage(bills));
// console.log(calcAverage([2, 5, 5]));
