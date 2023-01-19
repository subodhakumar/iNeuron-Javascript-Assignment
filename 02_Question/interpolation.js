// Concatinating variables via interpolation method

let firstname = "Subodh Kumar";
let lastName = "Mohanty";
let married = false;
let age = 28;
let country = "India";

// Concatinating these into a variable

let about = `The name of the candidate is ${firstname + " " + lastName}, his age is ${age}, he is from ${country}. Is he Married? ${married}`
console.log(about);