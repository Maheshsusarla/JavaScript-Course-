// Operators: 
//           An operator is a symbol that performs an operation on one or more operands (values or variables) and returns a result.

// Example:
// 10 + 5
// Here:
// 10 → Operand
// 5 → Operand
// + → Operator

// Types of Operators : JavaScript operators are commonly grouped as:
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators

// Arithmetic Operators : Arithmetic operators perform mathematical calculations.
// +
// -
// *
// /
// %
// **

// Addition : 
let a = 20;
let b = 10;
console.log(a + b);

// Subtraction (-)
let balance = 5000;
let withdraw = 1000;
console.log(balance - withdraw);

// Multiplication (*)
let price=100;
let quantity =3;
console.log(price*quantity);

// Division (/)
let total = 600;
let students = 3;
console.log(total / students);

// Modulus (%) : Returns the remainder.
console.log(10 % 3);

// Exponent (**)
console.log(2 ** 3);

// Increment(++)
let likes=100;
likes++;
console.log(likes);

// Decrement (--)
let stock = 20;
stock--;
console.log(stock);

// Assignment Operators :Assignment operators assign values to variables.
// =
// +=
// -=
// *=

let age = 22;
console.log(age);
age=age+5; // age+=5
// console.log(age);
age=age-10;
// console.log(age);
age=age*5;
// console.log(age);
age=age/5;
// console.log(age);
age=age%2;
// console.log(age);
age=age**4;
// console.log(age);


// Comparison Operators : Comparison operators compare two values and return a Boolean (true or false).
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=
// let a=10;
// let b=20;
// console.log(a==b);
// console.log(a===b);
// console.log(a>b);
// console.log(a<b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>=b);
// console.log(a<=b);

// == (Loose Equality) : Checks value only.
let c=10 == "10";
console.log(c);

// === (Strict Equality) : Checks both value and data type.
let d=10 === "10";
console.log(d);

// != : Not equal (loose)

let e=10 != "10";
console.log(e);

// !== :Strict not equal
let f=10 !== "10";
console.log(f);

// Logical Operators : Logical operators combine or invert Boolean expressions.
// && (AND) : Returns true only if all conditions are true.
let age=20;
let hasID=true;
if(age>=18 && hasID){
  console.log("Allowed to Vote");
}
else{
  console.log("Allowed to Vote");
}

// || (OR) : Returns true if at least one condition is true.

let age=20;
let hasID=true;
if(age>=18 || hasID){
  console.log("Allowed to Vote");
}
else{
  console.log("Allowed to Vote");
}

// ! (NOT) :Reverses the Boolean value.


// Conditional Statements:
// A conditional statement executes different blocks of code based on whether a condition is true or false.

// Real-life example:
// If it rains → Carry an umbrella.
// Otherwise → Go normally.

// if Statement : Runs code only when the condition is true.
let age = 20;
if(age >= 18){
  console.log("Eligible to vote");
}

// else Statement : Runs when the if condition is false.
if(balance >= amount){
  console.log("Withdrawal Successful");
}else{
  console.log("Insufficient Balance");
}

// else if Statement : Used to check multiple conditions.

let marks = 82;
if(marks >= 90){
  console.log("A Grade");
}else if(marks >= 75){
  console.log("B Grade");
}else if(marks >= 50){
  console.log("C Grade");
}else{
  console.log("Fail");
}

// witch Statement :Used when checking one value against many possible cases.
let day = 2;
switch(day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}


// Ternary Operator : A short form of if...else.

// Syntax
// condition ? valueIfTrue : valueIfFalse;
// Example
let age = 20;
let result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

// Login Validation
let username = "mahesh";
let password = "1234";
if(username === "mahesh" && password === "1234"){
  console.log("Login Successful");
}else{
  console.log("Invalid Credentials");
}

// ATM Withdrawal
let balance = 5000;
let amount = 2000;
if(balance >= amount){
  balance -= amount;
  console.log("Withdrawal Successful");
}else{
  console.log("Insufficient Balance");
}

// Voting Eligibility
let age = 19;
console.log(age >= 18 ? "Eligible to Vote" : "Not Eligible");

// Shopping Discount
let total = 6500;
if(total >= 5000){
  console.log("20% Discount");
}else{
  console.log("No Discount");
}

