//1

// let a = 10,
//   b = 3;

console.log(a + b);
console.log(a - b); 
console.log(a * b); 
console.log(a / b);
console.log(a % b); 
console.log(a ** b); 

//2
let x = 5;

x += 2; 
x -= 1;
x *= 3; 
x /= 2; 

console.log(x)

//3
console.log(5 == "5"); 
console.log(5 === "5"); 
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 > 5); 
console.log(10 <= 10); 

//4
let age = 20;

console.log(age > 18 && age < 30); 
console.log(age < 18 || age > 25); 
console.log(!(age > 18));

//5
let a = 5;

console.log(+a); 
console.log(-a);

let b = "10";
console.log(+b); 

let c = "abc";
console.log(+c); 

//6
let age = 17;

let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); 

//7
let fname = "Red";
let lname = "White";

let full = fname + " & " + lname;
console.log(full);

//8
console.log(typeof 10); 
console.log(typeof "hello"); 
console.log(typeof true);
console.log(typeof {});
console.log(typeof []); 

//9
let x = 5;

console.log(x++); 
console.log(++x);