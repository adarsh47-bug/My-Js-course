'use strict';

// 1
// 2
/*
// 3

const Person = function (firstName, birthYr) {
    // Instance properties
    this.firstName = firstName;
    this.birthYr = birthYr;

    // Never to this
    // this.calcAge = function () {
    //     console.log(3333 - this.birthYr);
    // }
    // to solve this we use prototypes
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {}-empty obj is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const adarsh = new Person('Adarsh', 2003);
console.log(adarsh);

console.log(jonas instanceof Person);

Person.hey = function () {
    console.log(`Hey there @`);
    console.log(this);
}
Person.hey();
// jonas.hey();

// 4
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2033 - this.birthYr);
};

jonas.calcAge();
adarsh.calcAge();

console.log(adarsh.__proto__);
console.log(adarsh.__proto__ === Person.prototype);
console.log('//////////');
console.log(Person.prototype.isPrototypeOf(adarsh));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person)); //📍

//
Person.prototype.species = 'Homo Sapiens';
//these'r not their owned properties, for that we need to declare them in the constr Fn...
console.log(adarsh.species, jonas.species);
// 📍 📍 📍
console.log(adarsh.hasOwnProperty('firstName')); //T
console.log(adarsh.hasOwnProperty('species')); //F
///////////////////////////////////

// 5
// Prototypal Inheritance and The Prototype Chain

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 4, 7, 8, 4, 7, 3, 8, 8, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }
// console.log(arr);
// console.log(arr.unique());
// console.log(arr);

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

// 6
// coding challenge #1
/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK
*/
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
    return this.speed += 10;
}
Car.prototype.break = function () {
    return this.speed -= 5;
}

// console.log(Car.prototype);

// car1
console.log(car1);
console.log(car1.accelerate());
console.log(car1.break());


// car2
console.log(car2);
console.log(car2.accelerate());
console.log(car2.break());
*/

// 7
// ES6 Classes
/*
// class expression

// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(fullName, birthYr) {
        this.fullName = fullName;
        this.birthYr = birthYr;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYr);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYr;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log(`Hey there @`);
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are also 1st-class citizens
// 3. Classes are executed in the "strict mode"

const walter = new PersonCl('Walter wy', 1965);

PersonCl.hey();

// 8
// Setters and Getters
// assessors properties , i.e. get or set values

const account = {
    owner: 'Jonas',
    movements: [200, 555, 345, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        return this.movements.push(mov);
    },
}

console.log(account.latest);

account.latest = 40;
console.log(account.movements);
*/

// 9
// Static Methods

// 10
// Object.create
/*
// 📍 📍
// that Object.create creates a new object,
// and the prototype of that object
// will be the object that we passed in.

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYr);
    },

    init(firstName, birthYr) {
        this.firstName = firstName;
        this.birthYr = birthYr;
    }
}
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYr = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto)
sarah.init('Sarah', '1999');
sarah.calcAge();

*/

// 11
// coding challenge #2

/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:
Data car 1: 'Ford' going at 120 km/h
GOOD LUCK
*/
/*
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        return this.speed += 10;
    }
    break() {
        return this.speed -= 5;
    }

    // makes new var i.e. "speedUS"
    get speedUS() {
        return this.speed / 1.6;
    }

    // set's new val to the var present in the class i.e. "speed"
    set speedUS(speed1) {
        this.speed = speed1 * 1.6; //this.speed and speed are both different,so i gave them different name
        console.log(this);
    }
}
const car1 = new CarCl('Ford', 120);

console.log(car1.speedUS);
car1.accelerate();
car1.break();
car1.break();
car1.speedUS = 11;
console.log(car1);

*/

// 12
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYr) {
    this.firstName = firstName;
    this.birthYr = birthYr;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYr);
};

const Student = function (firstName, birthYr, course) {

    // for this keyword using call method for 'Inheritance'
    Person.call(this, firstName, birthYr);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// the student dot prototype object is now an object that
// inherits from person dot prototype.

Student.prototype.intro = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.intro();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

// 13 
// coding challenge #3

/*
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definition of polymorphism
Test data:
Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
/*

const Car_ = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const EV = function (make, speed, charge) {
    Car_.call(this, make, speed)
    this.charge = charge;
}
Car_.prototype.accelerate = function () {
    this.speed += 10;
    // this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h`);
}
Car_.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
}

EV.prototype = Object.create(Car_.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}

const EVcar = new EV('Tesla', 120, 23);

console.log(EVcar);
EVcar.chargeBattery(90);
console.log(EVcar);
EVcar.break();

//📍accelerate method have been overwritten
EVcar.accelerate();

*/

// 14
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
    constructor(fullName, birthYr) {
        this.fullName = fullName;
        this.birthYr = birthYr;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYr);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYr;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log(`Hey there @`);
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYr, course) {
        // Always needs to happen first!
        super(fullName, birthYr);
        // And so super is basically the constructor function
        // of the parent class.
        this.course = course;
    }
    intro() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYr} years old, but as a student I feel more like ${2037 - this.birthYr + 10}`);
    }
}

// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'Information Technology');
console.log(martha);
martha.intro();
martha.calcAge();
*/

// 15
// Inheritance Between "Classes": Object.create
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYr);
    },

    init(firstName, birthYr) {
        this.firstName = firstName;
        this.birthYr = birthYr;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYr, course) {
    PersonProto.init.call(this, firstName, birthYr);
    this.course = course;
}

StudentProto.intro = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Information Technology');
jay.intro();
jay.calcAge();
*/

// 16
// Another Class Example
/*

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property ('_',use underscore convention)
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    // public interface

    getMovements() {
        //this way one cannot overwrite the movements
        return this._movements
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        //private method so protected method
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}
const acc1 = new Account('Adarsh', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(150);
// 📍So, basically these methods here,
// are the interface to our objects,
// and we also call this API,

acc1.requestLoan(100000);
// console.log(acc1.approveLoan(1000));
// 📍📍we need "data encapsulation" for this to remain private

console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
*/

// 17
// Encapsulation: Protected Properties and Methods

// 18 & 19
// Encapsulation: Private Class Fields and Methods
// & chaining methods

/*

// 1.Public fields
// 2.Private fields
// 3.Public methods
// 4.Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = []; // ('#' make's private)
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this.#pin = pin; //redefining
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    // 3) Public methods
    // public interface

    getMovements() {
        //this way one cannot overwrite the movements
        return [...this.#movements]
    }

    deposit(val) {
        this.#movements.push(val);
        return this; // for chaining methods
    }

    withdraw(val) {
        this.deposit(-val);
        return this;

    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 'static' versions, available for class itself
    static helper() {
        console.log(`Helper`);
    }

    // 4) Private method

    #approveLoan(val) {
        //private method so protected method
        return true;
    }
}
const acc1 = new Account('Adarsh', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(100000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements); //err
// console.log(acc1.#approveLoan(1000)); //err


// Chaining
// ex.  deposit(val) {
//     this.#movements.push(val);
//     return this; // for chaining methods
// }

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(20000).withdraw(4000);
console.log(acc1.getMovements());
*/

// 20
// ES6 Classes Summary REF. slides

// 21
// Coding Challenge #4 
/*
Your tasks: 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class 
2. Make the 'charge' property private 
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 'CarCl' 
class. Then experiment with chaining! 
Test data: 
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% 
GOOD LUCK 
*/
/*
const Car_ = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const EV = function (make, speed, charge) {
    Car_.call(this, make, speed)
    this.charge = charge;
}
Car_.prototype.accelerate = function () {
    this.speed += 10;
    // this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h`);
}
Car_.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
}

EV.prototype = Object.create(Car_.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}

const EVcar = new EV('Tesla', 120, 23);

console.log(EVcar);
EVcar.chargeBattery(90);
console.log(EVcar);
EVcar.break();

//📍accelerate method have been overwritten
EVcar.accelerate();
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        // this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
    break() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const ww = new EVCl('turbo', 900, 88);
console.log(ww);
ww.chargeBattery(95).accelerate().accelerate().break();
console.log(ww);

console.log(ww.speedUS);
