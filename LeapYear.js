const prompt = require('prompt-sync')();
const year = prompt('Enter year: ');  
if (year % 400 == 0)
console.log("It's a Leap year");
else if (year % 100 == 0)
console.log("It's not a Leap year");
else if (year % 4 == 0)
console.log("It's a Leap year");
else
console.log("It's not a Leap year");
