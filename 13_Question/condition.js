// Question No.13

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let number = prompt("Enter your age:");
if (number >= 18) {
  console.log('You are old enough to drive');
} else {
  let yearsToWait = 18 - number;
  console.log("You need to wait " + yearsToWait + " more years to be able to drive.");
}