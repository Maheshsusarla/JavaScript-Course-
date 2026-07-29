// Arrays

// let product1 = "Laptop";
// let product2 = "Mouse";
// let product3 = "Keyboard";
// let product4 = "Monitor";
// let product5 = "Headphones";

// What is an Array?
// An Array is a special JavaScript object used to store multiple values in a single variable. 
// Each value is stored at an index starting from 0.
// An array is a data structure used to store multiple values inside a single variable. 

// Instead
// creating an array
// let products=["Laptop","Mouse","Keyboard","Monitor","TV"];
// Only one variable.

// Why Arrays?
// Arrays organize similar data together, making it easier to access, process, search, update, and iterate over large collections of values.


// Accessing Elements
// let cart = ["Laptop","Mouse","Keyboard"];
// console.log(cart[0]);
// console.log(cart[1]);
// console.log(cart[2]);

// Updating Products
// cart[1] = "Gaming Mouse";
// console.log(cart);

// Array Length : How many products are in the cart.
// console.log(cart.length);

// Loop Through Array
// for(let i=0;i<cart.length;i++){
//     console.log(cart[i]);
// }

// Array Methods

// push():Adds an element to the end of the array.
let cart = ["Laptop","Mouse","Keyboard"];
// cart.push("Gaming Mouse");
// cart.push("Gaming Mouse","TV");
// console.log(cart);

// pop() : Removes the last element.
// cart.pop();
// cart.pop();
// console.log(cart);


// shift() : Removes first element.
// cart.shift();
// console.log(cart);

// unshift() :Adds first element.
// cart.unshift("Tv")
// cart.unshift("Tv","Gaming Mouse");
// console.log(cart);


// indexOf(): method returns the first index at which a specified value can be found in a string or an array.
//  If the value does not exist, it returns -1
// console.log(cart.indexOf("Mouse"));
// console.log(cart.indexOf("Tv"));

// includes() :Checks whether a value exists.
// console.log(cart.includes("Laptop"));
// console.log(cart.includes("Tv"));


// slice():  method returns a shallow copy of a portion of an array or string into a new object
// let products = ["Laptop","Mouse","Keyboard","Monitor","Phone"];
// console.log(products.slice(0,3));
// let product=products.slice(1);
// console.log(product);


// splice(): method modifies an array in place by removing, replacing, or adding elements
// let products = ["Laptop","Mouse","Keyboard","Monitor","Phone"];
// Removing
// console.log(products.splice(1,2)); // remove 1st and 2nd index 

// Adding
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(2, 0, "Mango", "Peach");  
// 1st startIndex is 2, so the new elements will be inserted starting at the third position.
// 2nd deleteCount is 0
// 3rd "Mango" and "Peach" are added at index 2.
// fruits.splice(2, 0, "Mango");
// console.log(fruits); 


// Replacing : Provide the startIndex, deleteCount, and the elements to replace the removed items.
// fruits.splice(1,2,"Orange")
// console.log(fruits);

// Adding or Removing Elements from the End of the Array
// fruits.splice(fruits.length - 1, 1);
// console.log(fruits);


// concat() : combine tow or more arrays and return a new array
// let a=[1,2,3,4,5];
// let b=['a','b','c','d','e']
// let c=a.concat(b)
// console.log(c);

// join(): it creates new str by concating all the element of an array and returns string by a specified seperator
// let a=[1,2,3,'a','b','c']
// let b=a.join("-");
// console.log(b);

// forEach() : Executes a function once for every array element.
let fruits=["Apple", "Banana", "Orange"];
// fruits.forEach((fruit)=>{
//     console.log(fruit);  
// })

// Element + Index
// fruits.forEach((fruit,index)=>{
//     console.log(index,fruit);
// })

// let numbers=[10,20,30,40,50];
// sum=0;
// numbers.forEach((num) =>{
//     sum+=num;
// })

// console.log(sum);

// let students = [
//     {name: "Mahesh", marks: 90},
//     {name: "Rahul", marks: 80},
//     {name: "Kiran", marks: 75}
// ];

// students.forEach((student) =>{
//     console.log(student.name,student.marks);  
// });

