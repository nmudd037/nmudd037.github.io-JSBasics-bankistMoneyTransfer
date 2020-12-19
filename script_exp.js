// 'use strict';
/*
//Converting and Checking Numbers
console.log(23 === 23.0);
//And the first thing that you should know about numbers is that in JavaScript,
//all numbers are presented internally as floating point numbers. So basically, always as decimals,
//no matter if we actually write them as integers or as decimals.

//numbers are represented internally in a 64 base 2 format. So that means that numbers are always stored
//in a binary format. So basically, they're only composed of zeros and ones. Now, in this binary form,
//it is very hard to represent some fractions that are very easy to represent
//in the base 10 system that we are used to. So base 10 is basically the numbers from zero to nine,
//while binary is base 2 and so that's the numbers zero and one.

//Base 10 - 0 to 9. 1/10 = 0.1, 3/10 = 3.33333333
//Binary case 2 - 0.1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //Gives False

//But, for example, if we were trying to do 3/10, then that is also impossible to represent for us, right?
//It would be this number here and three until infinity, okay?
//And so in binary, the same thing happens with 0.1. So we get basically an infinite fraction
//and that then results in a weird result like this one. Now, in some cases, JavaScript does some rounding
//behind the scenes to try its best to hide these problems but some operations, such as this one,
//simply cannot mask the fact that behind the scenes, they cannot represent certain fractions.
//And by the way, many other languages use the same system. For example, PHP or Ruby
//and so don't let anyone make fun of JavaScript
//because of this, okay? So we just have to accept that it works this way
//because we really cannot do anything against this. So just be aware
//that you cannot do like really precise scientific or financial calculations in JavaScript
//because eventually, you will run into a problem like this.

//String to Number Conversion
console.log(Number('23'));
console.log(+'23'); //TYpe Coercion

//Parsing
// every function is also an object.
console.log(Number.parseInt('30px', 10)); //It doesn't work for a string like 'e23' and 10 indicates decimal
//Now, in order to make this work, the string needs to start with a number

console.log(Number.parseInt(' 2.5rem  '));
console.log(Number.parseFloat('  2.5rem  ')); //Empty string doesn't effect

//console.log(parseFloat('  2.5rem  '));  //Old School Technique

// Checking if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

/*
//Math and Rounding
console.log(Math.sqrt(25)); //Square root
console.log(25 ** (1 / 2)); //Square root
console.log(8 ** (1 / 3)); //Cubic root

console.log(Math.max(5, 18, 23, 11, 2)); //Returns mamx number
console.log(Math.max(5, 18, '23', 11, 2)); //It does type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); //It does not do parsing

console.log(Math.min(5, 18, 23, 11, 2)); //Return min numbers

console.log(Math.PI * Number.parseFloat('10px') ** 2); // Calculate Radius

console.log(Math.random()); //Generates random numbers between 0 and 1

console.log(Math.trunc(Math.random() * 6) + 1); //Generates random numbers between 1 and 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min....(max - min + min) -> min....max

console.log(randomInt(10, 20));

//Rounding integers
//All of these methods do type coercion
console.log(Math.trunc(23.3)); //Trunc removes the decimal part

console.log(Math.round(23.3)); //rounds to the nearest integer
console.log(Math.round(23.8));

console.log(Math.ceil(23.3)); //rounds a number up to the next largest integer.
console.log(Math.ceil(23.8));

console.log(Math.floor(23.3)); //returns the largest integer less than or equal to a given number.
console.log(Math.floor(23.8));

//Floor and trunc behave same for positive numbers
//For negative numbers
console.log(Math.trunc(-23.3)); //23
console.log(Math.floor(-23.3)); //24

//Floating point Numbers - Decimals
console.log((2.7).toFixed(0)); //toFixed() returns a string
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2));

//So this is a number, so it's a primitive, right? And primitives actually don't have methods.
//And so behind the scenes, JavaScript will do boxing. And boxing is to basically transform this
//to a number object, then call the method on that object. And then once the operation is finished
//it will convert it back to a primitive, okay?
*/

/*
//The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); //5 = 2 * 2 + 1

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(0));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/

/*
// Working with BigInt

// numbers are represented internally as 64 bits. And that means that there are exactly 64 ones or zeros
// to represent any given number. Now of these 64 bits only 53 are used
// to actually store the digits themselves. The rest are for storing the position
// of the decimal point and the sign. Now, if there are only 53 bits to store the number,
// that means that there is a limit of how big numbers can be,
// and we can calculate that number. So that's two elevated to 53
// and then minus one, because the numbers starts at zero. And so that is this gigantic number right here.
// And so this is essentially the biggest number that JavaScript can safely represent, okay.

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// JavaScript can simply not represent these numbers accurately.
// And so if we do calculations with numbers that are bigger than this,
// then we might lose precision, okay. So in some numbers it does actually work
// for some reason, but that's because JavaScript behind the scenes uses some tricks
// to still represent some of the unsafe numbers. But again, sometimes that works,
// sometimes it doesn't. And so that's why we call these unsafe numbers.

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// So, this can be a problem sometimes because in some situations we might need really, really big numbers.
// Way bigger than this one here, for example, for database IDs or when interacting with real 60 bit numbers
// and these numbers are actually used in other languages. And so we might, for example
// from some API, get a number that is larger than this. And then we have no way
// of storing that in JavaScript, at least not until now, because now starting from IES 2020
// a new primitive was added, which is called BigInt. Now right? And BigInt stands for big integer.
// And it can be used to store numbers as large as we want. So no matter how big, all right.

console.log(433333576225651152015585236879320335n);
//And so this n here basically transforms a regular number, into a BigInt number.

console.log(BigInt(47666212));

//Operations
console.log(10000n + 10000n);
console.log(6548632156321564103365524525698n * 1000000n);

// console.log(Math.sqrt(16n)); //Doesn't work with bigint

const huge = 52145636952148696325265n;
const num = 23;
//console.log(huge + num); //Gives error so we need to use BigInt constructor
//Cannot mix BigInt and other types, use explicit conversions
console.log(huge + BigInt(num));

//Exceptions: Logical Operators
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20); //We could also use '20'

console.log(huge + 'is Really big!!');

//Divisions
console.log(10n / 3n);
console.log(10 / 3);

*/

/*
//Creating Dates
//4-ways of creating dates
//1)
const now = new Date();
console.log(now);

//2)
console.log(new Date('Dec 12 2020 18:52:03'));
console.log(new Date('December 24, 2015'));

const movementsDates = [
  '2019-11-18T21:31:17.178Z',
  '2019-12-23T07:42:02.383Z',
  '2020-01-28T09:15:04.904Z',
  '2020-04-01T10:17:24.185Z',
  '2020-05-08T14:11:59.604Z',
  '2020-05-27T17:01:17.194Z',
  '2020-07-11T23:36:17.929Z',
  '2020-07-12T10:51:36.790Z',
];

//3)
console.log(new Date(movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
//Now, you might've noticed that here we have 10, but November is actually the month 11, right?
//And so that means that the month here in JavaScript is zero based.
console.log(new Date(2037, 10, 31, 15, 23, 5));
//JavaScript actually autocorrects the day.
//So let's try November 31st, but we know that November only has 30 days, right?
//And so if we take a look at this, it will then autocorrect right to the next day.
//So that's going to be December 1st

//4)
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Finally, we can also pass into the date constructor function,
//the amount of milliseconds passed since the beginning
//of the Unix time, which is January 1, 1970,

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142274980000));

console.log(Date.now());

future.setFullYear(2040); //we also have setMonth, setDate ....and so on
console.log(future);
*/

/*
//Operations with dates
const future = new Date(2037, 10, 19, 15, 23);
//console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

/*
//Internationalizing Dates (Intl)
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;
console.log(locale);
//console.log(new Intl.DateTimeFormat('en-US').format(now));
//console.log(new Intl.DateTimeFormat('en-GB').format(now));
console.log(new Intl.DateTimeFormat(locale, options).format(now));
*/

/*
//Internationalizing Numbers (Intl)
const num = 3884746.23;

const options = {
  //style: 'unit',
  //unit: 'mile-per-hour',
  //unit: 'celsius',
  //style: 'percent',
  style: 'currency',
  currency: 'EUR',
  //useGrouping: false,
};

console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('India:  ', new Intl.NumberFormat('en-IN', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/*
//Timers: setTimeout and setInterval
setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
//So again, as soon as JavaScript hits this line of code here, it will simply basically keep counting the time
//in the background, and register this callback function to be called after that time has elapsed,
//and then immediately, JavaScript will move on to the next line, which is this one, all right.
//And this mechanism is called Asynchronous JavaScript.
//so basically, all the arguments here that we pass
//after the delay will be arguments to the function
console.log('Waiting...');
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  'olives',
  'spinach'
);

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//So we learned that set timeout here, simply schedules a function to run after
//a certain amount of time, but the callback function is only executed once.
//Now, what if we wanted to run a function over and over again, like every five seconds, or every 10 minutes?

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
