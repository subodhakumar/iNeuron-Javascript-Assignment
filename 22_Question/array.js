// Question No.22

// The following is an array of 10 students ages:
/*
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method
*/

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Finding min & max age
minValue = Math.min(...ages);
maxValue = Math.max(...ages);
console.log(minValue);
console.log(maxValue);

// Finding average
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
sum = ages.reduce((a,b)=> a + b)
console.log(sum);
let avg = sum / ages.length;
console.log(avg);

// Finding range---- (Max-Min)
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const range = maxAge - minAge;
console.log(range); // Output: 7
