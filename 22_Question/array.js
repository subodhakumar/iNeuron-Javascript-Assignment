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

function averageAge(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
      sum += ages[i];
    }
    return sum / ages.length;
  }
  
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  let average = averageAge(ages);
  console.log(average); // Output: 22.9
  
