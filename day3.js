// What is a Loop?
// A loop is a programming structure that repeatedly executes a block of code until a specified condition becomes false.

// Types of Loops
// JavaScript provides three primary loops:
// for
// while
// do...while

// for loop : A for loop is used when the number of iterations is known before execution.

// for(initialization; condition; increment){
//     // code
// }

for (let i = 0;i<=5;i++) {
    console.log(i);
}

const products = ["Laptop", "Mouse", "Keyboard"];
for(let i=0;i<products.length;i++){
    console.log(products[i]);
}

// When to Use
// Use a for loop when:
// You know how many times to repeat.
// You are iterating over arrays using indexes.
// You need a counter.

// while Loop
// A while loop executes a block of code repeatedly as long as the condition remains true.

// while(condition){
//     // code
// }

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let attemptes=3;
while(attemptes>0){
    console.log("Enter a pin: ");
    attemptes--;
}

// When to Use
// Use while when:
// You don't know the exact number of iterations.
// Execution depends on a changing condition.

// do...while Loop
// A do...while loop executes the code at least once before checking the condition.

// do{
//     // code
// }while(condition);

let a=1;
do{
    console.log("hi");
    a++;
}while(a<=5)


// Even if the condition is false initially: excute at least once
let b = 10;
do{
    console.log("Hello");
}while(b < 5);


// break Statement
// The break statement immediately terminates the nearest loop or switch statement.

for (let i = 0; i <=5; i++) {
    if(i===3){
        break;
    }
    else{
        console.log(i);
    }    
}

// contiune : skip the currrent iteraction
for (let i = 0; i <=5; i++) {
    if(i===3){
        continue;
    }
    else{
        console.log(i);
    }    
}

const products = ["TV", "Laptop", "Mouse"];
for(let i = 0; i < products.length; i++){
    if(products[i] === "Laptop"){
        console.log("Product Found");
        break;
    }
}

// Multiplication Table
let number=7;
for(let i=1;i<=10;i++){
    console.log(`${number} X ${i} = ${number * i}`);
}

// Sum of Numbers
let sum=0;
for(let i=0;i<=100;i++){
    sum+=i;
}
console.log(sum);

// Print even numbers between 1 and 100.
for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}

// Print Odd Numbers (1–20)
for(let i=1;i<=50;i++){
    if(i%2!==0){
        console.log(i);
    }
}


//  Reverse a number (e.g., 123 → 321).
let num=123;
let rev=0;
while(num>0){
    let digit=num%10;
    rev=rev*10+digit
    num=Math.floor(num/10)
}
console.log(rev);

// Count the digits in a number
let numbers=123456;
let count=0;
while(numbers>0){
    count++;
    numbers=Math.floor(numbers/10)
}
console.log(count);

// Check whether a number is a palindrome.
let num=123;
let original=num
let rev=0;
while(num>0){
    let digit=num%10;
    rev=rev*10+digit;
    num=Math.floor(num/10)
}
if(original===rev){
    console.log("number is a palindrome.");   
}
else{
    console.log("not  a palindrome.");   
}

// Largest Digit
let num=98765;
let largest=0;
while(num>0){
    let digit=num%10;
    if(digit>largest){
        largest=digit;
    }
    num=Math.floor(num/10)
}
console.log(largest);

// Find Prime Number
let num=17;
let prime=true;
for(let i=2;i<num;i++){
    if(num%2===0){
        prime=false;
        break;
    }
}
if(prime){
    console.log("prime number");
}
else{
    console.log("not a prime number");
}

// Fibonacci Series
let a=0;
let b=1;
for(let i=1;i<=10;i++){
    console.log(a);
    
    let c=a+b;
    a=b;
    b=c
}


// for...of
// Used to iterate over Arrays and Strings.

let fruits = ["Apple", "Banana", "Orange"];
for(let fruit of fruits){
    console.log(fruit);
}

let products = ["TV","Laptop","Phone"];
for(let product of products){
    if(product === "Laptop"){
        console.log("Product Found");
        break;
    }
}

// for in :
// used to in a objects properites
let student = {
    name:"Mahesh",
    age:21,
    city:"Bangalore"
};
for(let key in student){
    console.log(key, student[key]);
}

// Nested Loops
// Loop inside another loop.

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){
        console.log(i, j);
    }
}
