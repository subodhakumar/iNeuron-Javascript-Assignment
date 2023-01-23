// Question No.21

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list

let arr = ["India", "USA", "England"];

if (arr.includes("Ethiopia")){
    console.log("ETHIOPIA");
} else {
    arr.push("Ethiopia");
}

console.log(arr); // [ 'India', 'USA', 'England', 'Ethiopia' ]