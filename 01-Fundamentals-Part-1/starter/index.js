// 'use strict';
/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// index.js:36 true
// index.js:39 boolean
// index.js:44 string
// index.js:47 undefined
// index.js:48 undefined
// index.js:51 number
// index.js:53 object


////////////////////////////////////

let age = 30;
age = 31; //mutation of variable

const birthYear = 1991;
// birthYear = 1990;

// const job; //err

// var job = 'programmer';
// job = 'teacher'
//err
// lastName = 'Schmedtmann';
// console.log(lastName); //err in strict mode



//////////////////////////////////////
const now = 2037;
const ageJonas = now - 1991;
const ageSerah = now - 2028;
console.log(ageJonas, ageSerah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'jonas'
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); //concatinations of string


//assignment operators
let x = 10 + 5; //x=15
x += 10; //x=25; x=x+10
x *= 4; //x=x*4
x++;
x--;
x--;
console.log(x);

//  comparision operators
console.log(ageJonas > ageSerah); // >,<,<=,>=
console.log(ageSerah >= 18);

const isFullAge = ageSerah >= 18;
console.log(now - 1991 > now - 2010);

// index.js:86 46 9
// index.js:88 92 4.6 8
// index.js:92 jonas Schmedtmann
// index.js:101 99
// index.js:104 true
// index.js:105 false
// index.js:108 true


//////////////////////////////////////

const now = 2037;
const ageJonas = now - 1991;
const ageSerah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(ageJonas);
console.log(ageSerah);

// console.log(ageJonas + ageSerah / 2); //logic err
console.log((ageJonas + ageSerah) / 2);

///////////////////////////////////////
/*
const firstName = 'Adarsh';
const job = 'Engineer';
const birthYear = 2003;
const year = 2023;

// old
const adarsh = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + '!';
console.log(adarsh);
//new
const adarshNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(adarshNew);

// console.log('"`c`"'); //idea string experiments

// old
console.log('hello \n\
hi\n\
    bye');
// new
console.log(`Hello
hi
    bye`);  //idea note: this expression should be in ``-backtick

//////////////////////////////////////

const age = 15;
// const isOldEnough = age >= 18;  //f

if (age >= 18) {
    console.log("ak can drive 🚗🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`ak is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


//////////////////////////////////////////

// 20. Type Conversion and Coercion

const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('inputYear'));
console.log(typeof (NaN));

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //10
console.log('23' + '10' - 3); //2307
console.log('23' / '2');
// console.log('23' ** '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

//////////////////////////////////


// 21. Truthy and Falsy Values
// 5 falsy values: 0, '' , undefine, null, NaN
// f
console.log(Boolean());
console.log(Boolean(``)); //''//""
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
// t
console.log(Boolean('ak'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINE");
}

//////////////////////////////////////


// 22. Equality Operators: == vs. ===

const age = '20';
if (age === 20) console.log("You just became a Man :D (strict)");

if (age == 20) console.log("You just became a Man :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 9) {
    console.log('Cool! 9 is an amazing number');
} else if (favourite === 0) {
    console.log('Cool! 0 is an amazing number');
} else {
    console.log('Number is not 23 or 9 or 0!');
}

if (favourite !== 8) console.log('Why not 8??');


/////////////////////////////////////////////////
// 24. Boolean Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Ak is able to drive!");
// } else {
//     console.log("Someone else should drive....");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Ak is able to drive!");
} else {
    console.log("Someone else should drive....");
}


///////////////////////////////////////////////
// cc3


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

// bonus1&2
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}


/////////////////////////////////////
// 26. The switch Statement

const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`Plan course structure\nGO to coding meetup`);
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
        console.log("...")
        break;
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case "saturday":
        console.log("Enjoy!!");
        break;
    case 'sunday':
        console.log("Enjoy the weekend!!");
        break;
    default:
        console.log("Not a valid day!")
}


if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}




///////////////////////////////////////
//27. Statements and Expressions


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);



//////////////////////////////
// 28. The Conditional (Ternary) Operator

const age = 28;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);



//////////////////////////////////
//cc4

#1
const bill = 275;
let tip;

(300 >= bill) && (bill >= 50) ? tip = .15 * bill : tip = .20 * bill;

console.log(bill, tip, (bill + tip));

#2 (efficient)
const bill = 275;

// Write your code below. Good luck! 🙂

let tip = (300 >= bill) && (bill >= 50) ? .15 * bill : .20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

///////////////////////////////////////////
//
