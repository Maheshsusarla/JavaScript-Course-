// DOM (Document Object Model): 
// The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree of objects. 
// JavaScript uses the DOM to access, modify, create, and remove HTML elements dynamically.


// const myh1=document.getElementById("myh1");
// myh1.textContent="Welcome mahesh";

// What is document?
// document is the root object that represents the entire HTML page.

// Selecting Elements
// 1. getElementById()
// const myh2=document.getElementById("myh2").textContent="Hello Mahesh";

// querySelector()
// const btn=document.querySelector("btn");


// const btn=document.getElementById("btn")
// btn.style.backgroundColor="green";
// btn.style.padding="20px";
// btn.style.borderRadius="10px";

// document.body.style.backgroundColor="yellow";


const title=document.getElementById("title");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    title.textContent="Welcome to Amazon!";
})