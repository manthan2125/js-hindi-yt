const score = 400
// console.log(score);
const balance = new Number(400)
// console.log(balance);

console.log(balance.toString());  // Converts number to string
console.log(balance.toFixed(3));  // Precision Value => 400.000

const otherNumber = 452.26559
console.log(otherNumber.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString()); //1,000,000 (US Standards)
console.log(hundred.toLocaleString('en-IN')); //Indian Standard

// ++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math.round(2.75));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));

console.log(Math.max(45,8,5,9,6,43));
console.log(Math.min(12,8,6,7,3));


console.log(Math.abs(-5));   // Act as Modulus
console.log(Math.random());  // 0-1
console.log((Math.random()*10) + 1);  // Min -> 1 ; Max -> 9

// Important
const min = 10
const max = 20
console.log(Math.floor((Math.random()*(max - min + 1)) + min)) 


