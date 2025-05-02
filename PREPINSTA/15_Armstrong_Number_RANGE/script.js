// // with function
// function isArmstrong(number) {
//   let num = Math.abs(number);
//   let temp = num;
//   let digits = 0;

//   // count no of digit
//   while (temp > 0) {
//     digits++;
//     temp = Math.floor(temp / 10);
//   }

//   temp = num;

//   let sum = 0;

//   // calculate sum of power
//   while (temp > 0) {
//     let digit = temp % 10;

//     sum += Math.pow(digit,digits);
//     temp = Math.floor(temp / 10);
//   }

//    return sum == num;
// }

// // let input = 145;
// let start = 1;
// let end = 10;

// for (let i = start; i <= end; i++){

// if(isArmstrong(i)) {
//     console.log(`${i} is armstrong number!`);
// }  

// }

// without function

let start = 1;
let end = 1000; // You can change the range

for (let num = start; num <= end; num++) {
  let temp = num;
  let digits = 0;

  // Count number of digits
  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
  }

  temp = num;
  let sum = 0;

  // Calculate sum of digits raised to the power of number of digits
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  // Check if number is Armstrong
  if (sum === num) {
    console.log(`${num} is an Armstrong number!`);
  }
}
