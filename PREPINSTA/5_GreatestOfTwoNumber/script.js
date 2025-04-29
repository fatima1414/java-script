// let print = document.getElementById("gretwo")
// function checkData(){
//     let num1 ;
//     let num2 ;

//     let answer = parseInt(document.getElementById("input-num").value)

 
//     // if (num1 == num2)
//     //     print.innerText << "both are equal";
//      if (num1 >= num2)
//         print.innerText = " is greater than " ;
//     else
//     print.innerText =  " is greater than "  ;
// } 

 
// let print = document.getElementById("gretwo");

// function checkData() {
//     // Get the values of the two input numbers
//     let num1 = parseInt(document.getElementById("input-num1").value);
//     let num2 = parseInt(document.getElementById("input-num2").value);

//     // Check if the inputs are valid numbers
//     if (isNaN(num1) || isNaN(num2)) {
//         print.innerText = "Please enter valid numbers in both fields.";
//         return;
//     }

//     // Compare and display the result
//     if (num1 > num2) {
//         print.innerText = num1 + " is greater than " + num2;
//     } else if (num1 < num2) {
//         print.innerText = num2 + " is greater than " + num1;
//     } else {
//         print.innerText = "Both numbers are equal.";
//     }
// }


// // for Loop
// let print = document.getElementById("gretwo");

// function checkData() {
//     let num1 = parseInt(document.getElementById("input-num1").value);
//     let num2 = parseInt(document.getElementById("input-num2").value);

//     if (isNaN(num1) || isNaN(num2)) {
//         print.innerText = "Please enter valid numbers in both fields.";
//         return;
//     }

//     // Use a for loop for the sake of practice (just once)
//     for (let i = 0; i < 1; i++) {
//         if (num1 > num2) {
//             print.innerText = num1 + " is greater than " + num2;
//         } else if (num1 < num2) {
//             print.innerText = num2 + " is greater than " + num1;
//         } else {
//             print.innerText = "Both numbers are equal.";
//         }
//     }
// }


let x = 1000;
let y = 20000;

if (x > y) {
  console.log(" x is gretest then y",x);
} else {
  console.log(" y is gretest then x",y);
}