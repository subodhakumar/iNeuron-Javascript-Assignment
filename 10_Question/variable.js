// Question No.10

// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/*
- 4 > 3
- 4 >= 3
- 4 < 3
- 4 <= 3
- 4 == 4
- 4 === 4
- 4 != 4
- 4 !== 4
- 4 != '4'
- 4 == '4'
- 4 === '4'
- Find the length of python and jargon and make a falsy comparison statement.
*/

let a = 4 > 3; // true
let b = 4 >= 3; // true 
let c = 4 < 3; // false
let d = 4 <= 3; // false
let e = 4 == 4; // true
let f = 4 === 4; // true
let g = 4 != 4; // false
let h = 4 !== 4; // false
let i = 4 != '4'; // false
let j = 4 == '4'; // true
let k = 4 === '4'; // false
console.log(a,b,c,d,e,f,g,h,i,j,k);

let lang1 = "python";
let lang2 = "jargon";
console.log(lang1.length, lang2.length); // Length of both lang1 & lang2 is 6

let compare = lang1 == lang2;
console.log(compare); // It is a falsy statement
