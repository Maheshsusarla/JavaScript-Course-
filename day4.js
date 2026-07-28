//  What is a Function?
// A function is a reusable block of code that performs a specific task. 
// It helps avoid code duplication and improves readability and maintainability.

// Why do we use Functions?
// Without Functions
// console.log("Welcome Mahesh");
// console.log("Welcome Rahul");
// console.log("Welcome Ravi");
// console.log("Welcome Ajay");

// Functions make code:
// Reusable
// Modular
// Easy to read
// Easy to test
// Easy to maintain

// With Function

function welcome(name){
    console.log("Welcome " + name);
}
welcome("Mahesh");
welcome("Rahul");
welcome("Ravi");
welcome("Ajay");


//  Function Declaration
// function functionName(){
// }

// function login(){
//     console.log("Login Successful");
// }

// login();


// Parameters
// Parameters are variables written in the function definition.

// function greet(name){
//     console.log("Hello " + name);
// }

// Arguments
// Arguments are actual values passed to the function.
// greet("Mahesh")



// Return Statement
// The return statement sends a value back to the function caller and immediately stops the execution of the function.
// function add(a,b){
//     return a+b;
// }
// let result = add(10,20);
// console.log(result);

// Why Use return?
// Without return, the function cannot send a calculated result back to the caller.

// return is used when another part of the program needs the result.
// console.log() is mainly used for debugging and displaying information.

// Function Expression
// A function stored inside a variable is called a function expression.

// const greet = function(){
//     console.log("Hello");
// };
// greet();

// Arrow Functions
// Arrow functions provide a shorter syntax for writing functions and do not have their own this binding.

// const greet=() =>{
//     console.log("hi");
// }

// greet();

// const greet=() => 1+2;
// console.log(greet());


// const add = (a,b)=>{
//     return a+b;
// }
// a=add(5,10)
// console.log(a);


// Scope

// Global Scope : Accessible everywhere.
// let compeny="Google";
// function show(){
//     console.log(compeny);
// }

// show();
// console.log(compeny);

// Local Scope  Accessible only inside the function.

// function show(){
//     let salary=1000;
//     console.log(salary);
// }
// show();
// console.log(salary); //error because is global salary is not defined


// Default Parameters
// function show(name="mahesh"){
//     console.log(`hello ${name}`);
// }

// show();

function add(a,b=20){
    return a+b;
}

console.log(add(10));

// examples 
// Login User
function login(username,password){
    if(username==="mahesh" && password==="1234"){
        return "Login successfully"
    }
    else
        return "Invalid Credentials"
}

console.log(login("mahesh","124"));

// Send OTP
function sendOtp(mobile){
    return "Otp send to " + mobile;
}
console.log(sendOtp("123456789"));


// Calculator
function Calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
            return "Invalid";
    }
}

console.log(Calculator(2,3,""));

// // Find Square
function Square(num){
    return num*num;
}
console.log(Square(5));

// Check Even or Odd

function isEven(num){
    return num%2==0;
}
console.log(isEven(2));

// Factorial
function Factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i
    }
    return fact;
}
console.log(Factorial(5));


// ATM Withdrawal
function Withdraw(balance,amount){
    if(balance>=amount){
        balance-=amount
        return balance;
    }
    return  "Insufficient Balance";
}

console.log(Withdraw(5000,1000));
