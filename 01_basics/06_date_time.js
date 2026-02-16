// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,21)   // Months in js started from 0...
// let myCreatedDate1 = new Date(2024,11,21)
// let myCreatedDate1 = new Date(2024,11,21,5,4,2,1)  //[Date(year, monthIdx(0-11) ,date,hour,min,sec,ms)]
// let myDate1 = new Date("2020-01-21")    // yyyy-mm-dd
let myDate1 = new Date("7-21-2005")  // mm-dd-yyyy
// console.log(myDate1.toLocaleString());

// TimeStamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);     // The number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC ...
// console.log(typeof((myTimeStamp)));
// console.log(myDate1.getTime());
// console.log(Math.floor(Date.now()/1000))   // seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);

console.log(`Date is ${newDate.getDate()} and Time is ${newDate.getTime()}`)

newDate.toLocaleString("default",{
    weekday:"long",
})