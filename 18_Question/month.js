// Question No.19

// Write a program which tells the number of days in a month, now consider leap year.

let month = prompt('Enter the name of month you want to check its total days:');
let year = prompt('Enter the year:')
if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December"){
    console.log('The month is of 31 days.')
} else if (month === "April" || month === "June" || month === "September" || month === "November"){
    console.log('The month is of 30 days.')
} else if (month === "February"){ if (year%4 == 0){
    console.log('The month is of 29 days.')} else {
console.log('The month is of 28 days.')
    }
} else {
    console.log('Invalid month.')
}