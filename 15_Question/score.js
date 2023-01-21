// Question No.15

// Write a program which can give grades to students according to theirs scores:
/*
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/

let score = prompt('Enter your Mark to check Grade:');
if (score >= 80 && score <= 100){
    console.log('Your Grade is "A"');
} else if (score >=70 && score <= 79){
    console.log('Your Grade is "B"');
} else if (score >= 60 && score <= 69){
    console.log('Your Grade is "C"');
} else if (score >= 50 && score <= 59){
    console.log('Your Grade is "D"');
} else if (score >= 0 && score <= 49) {
    console.log('Your Grade is "F"');
} else {
    console.log('Invalid Mark.')
}