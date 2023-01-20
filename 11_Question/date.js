// Question No.11

/* Use the Date object to do the following activities
- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let date = new Date; // (I am viewing it on 20th Jan 2023)
console.log(date.getFullYear()); // 2023 (To get Year)
console.log(date.getMonth()); // 0 (Month index is 0, Month's index is from 0 to 11)
console.log(date.getDate()); // 20 (Date starts from 1 to 31)
console.log(date.getDay()); // 5 (Day's index is 5, it starts from 0 to 6)
console.log(date.getHours()); // 11 (Hour starts from 0 to 23)
console.log(date.getMinutes()); // 4 (Minute starts from 0-59)

let old = new Date('January 1, 1970');
let elapsed = date - old;
console.log(elapsed);


