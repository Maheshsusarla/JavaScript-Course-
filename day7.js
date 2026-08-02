// What is a String?

// A String is a sequence of characters used to represent text in JavaScript. Strings can contain letters, numbers, symbols, and spaces, 
// and they are enclosed in single quotes (' '), double quotes (" "), or backticks (`).

// example:
// let search = "JavaScript Tutorial";
// console.log(search);

// length Property : length returns the total number of characters in a string
// let password = "Mahesh@123";
// console.log(password.length);

// toUpperCase: 
// let empCode = "emp101";
// console.log(empCode.toUpperCase());


// toLowerCase: 
// let search = "Laptop";
// console.log(search.toLowerCase());


// trim(): it removes white spaces To remove unwanted spaces from the beginning and end of a string, commonly before validation or comparison.
// let email = "   mahesh@gmail.com   ";
// console.log(email.trim());
// console.log(email);


// includes() method returns true if an array contains a specified value. method returns false if the value is not found.
// let product = "Dell Inspiron Laptop";
// console.log(product.includes("Laptop"));

// startsWith():
// let ifsc = "SBIN0001234";
// console.log(ifsc.startsWith("SBI"));
// console.log(ifsc.startsWith("SBi")); // false

//  endsWith():
// let email="mahesh123@gmail.com";
// console.log(email.endsWith("gmail.com"));

// replace():searches a string for a specified value and returns a new string with the first match replaced.
// let company = "Facebook is a Website";
// console.log(company.replace("Facebook","Meta"));

// split(): method divides a string into an array of substrings based on a specified separator
// let name="Mahesh Kumar";
// console.log(name.split(" "));


// substring() :  extracts a specific portion of a string and returns it as a new string without modifying the original text
// let otp = "845623";
// console.log(otp.substring(0,4));

// Template Literals:  a JavaScript feature introduced in ES6 (ECMAScript 2015) that allow you to work with 
// strings using backticks (`) instead of standard single or double quotes

// let name="Mahesh kumar";
// console.log(`Hello ${name}`);


// Login System:
// let eamil="mahesh1@gmail.com";
// let password="admin123";

// eamil=eamil.trim().toLocaleLowerCase();

// if(eamil==="mahesh1@gmail.com" && password==="admin123"){
//     console.log("Login Successful");
// }
// else{
//     console.log("Invalied");
// }


// let products=["Mobile","Mouse","Tv"];
// let search="mobile";

// for(product of products){
//     if(product.toLowerCase()===search.toLowerCase()){
//         console.log("product Found");
//     }
// }


// Why are strings immutable in JavaScript?
// Methods like replace() or toUpperCase() return a new string instead of modifying the original one.

