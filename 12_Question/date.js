// Question No. 12

/*
Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

let now = new Date('2022', '2', '28');
console.log(now.toString()); // Mon Mar 28 2022 00:00:00 GMT+0530 (India Standard Time)
console.log(now.toDateString()); // Mon Mar 28 2022
console.log(now.toISOString()); // 2022-03-27T18:30:00.000Z
console.log(now.toLocaleDateString()); // 28/3/2022