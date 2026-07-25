// what is js: 
//          JavaScript is a high-level, interpreted programming language used to make web pages interactive and dynamic. 
//          It runs inside the browser and can also run on servers using Node.js.

// Why JavaScript?
// Because HTML and CSS cannot perform logic.
//             JavaScript can
//             ✔ Calculate
//             ✔ Validate
//             ✔ Fetch Data
//             ✔ Handle Events
//             ✔ Manipulate HTML

// Variables : Variables are containers used to store data.
// var let const 

// var : Old way to declare variables.
var age = 20;
age=30;
var age=50;
// console.log(age);
// ✔ Redeclared
// ✔ Reassigned

// let : 
// Can change value.
// Cannot redeclare.
let name = "Mahesh";
name="js";
// let name="python" error 
// console.log(name);

// const :
// Constant variable.
// Cannot change.
const pi = 3.14;
// console.log(pi);
// pi=5;
// console.log(pi);

// Data Types : JavaScript has different types of data.

// Primitive: 
// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// String: 

// Non Primitive:
// Object
// Array
// Function

// String: 
let Name = "Mahesh";
// console.log(Name);

// Number:
// let age = 21;
// console.log(age);

// Boolean : True,False
let isLogin = true;
// console.log(isLogin);

// Undefined:  A variable that has been declared but has not yet been assigned a value.
let city;
// console.log(city);

// Null: Intentional empty value.
let data = null;
// console.log(data);

// Object : Stores multiple values. Objects group related information into a single structure using key-value pairs.
let product = {
    names:"Laptop",
    price:60000,
    brand:"Dell"
}
// console.log(product);
// Array : Stores multiple values.
let marks = [90,95,88];
console.log(marks);

// typeof: Used to know datatype.
// Example
let age = 20;
// console.log(typeof age);

typeof 10
// "number"

typeof "Mahesh"
// "string"

typeof true
// "boolean"

typeof undefined
// "undefined"

typeof null
// "object" (this is a historical JavaScript quirk)

typeof {}
// "object"

typeof []
// "object"

typeof function() {}
// "function"


// Console:  Used for debugging and displaying output.
console.log("Hello");
console.error("Error");
console.warn("Warning");
console.table([
  { name: "Mahesh", marks: 95 },
  { name: "Ravi", marks: 90 }
]);

// Comments
// Single Line
//      This is a comment

// Multi Line:
                /*
                This is
                a multi-line comment
                */


// - Print Your Details
let name = "Mahesh";
let age = 21;
let city = "Bangalore";
console.log(name);
console.log(age);
console.log(city);

// Age Calculator
let birthYear = 2005;
let currentYear = 2026;
let age = currentYear - birthYear;
console.log("Age:", age);

// Check Data Types
let name = "Mahesh";
let age = 21;
let isStudent = true;
let city;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);


// let name="mahesh";
// console.log(name,typeof name);
// let age=22;
// console.log(age,typeof age);
// let isstudent=true;
// console.log(isstudent,typeof isstudent);
// let salary=40000.400;
// console.log(salary,typeof salary);
// let myid=123456789n;
// console.log(myid,typeof myid);
// let mysymbol=Symbol("This is my symbol");
// console.log(mysymbol,typeof mysymbol);
// let id;
// console.log(id,typeof id);
// let compeny=null;
// console.log(compeny,typeof compeny);

