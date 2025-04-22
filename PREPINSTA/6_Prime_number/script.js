// let print = document.getElementById("prime");

// function checkData() {
//     let num1 = parseInt(document.getElementById("input-num1").value);
//     let print = document.getElementById("prime");
//     let count = 0;


//prime number
//  let num1=15;
//  let count = 0;

// for(let i=1;  i <= num1; i++){
//     if(num1%i==0){
//         ++count;
//     }
// }

// if(count ==2){
//     console.log("prime number")
// }else{
//     console.log("not prime number")
// }

// prime number with range
// let start = 50;
// let end = 100;
// for (let num = start; num <= end; num++) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
       
//         if (num % i == 0) {
//             ++count;
         
//         }
//     }

//     if (count == 2) {
//         console.log(num)
//     }
// }

//PRIME NUMBER URL
function checkData() {
    let start= parseInt(document.getElementById("input-num1").value);
    let print = document.getElementById("prime");

   
            let count = 0;
            for (let i = 1; i <= start; i++) {
               
                if (start % i == 0) {
                    ++count;
                 
                }
            }
        
            if (count == 2) {
                print.innerText = "it is a prime number";
            }else{
                print.innerText = "it is a not prime number";
            }
        }
    


// for (let num = start; num <= end; num++) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         result += num + " ";
//     }
// }

// print.innerText = "Prime numbers: " + result;
// }
