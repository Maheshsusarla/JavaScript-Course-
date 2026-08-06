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


// const title=document.getElementById("title");
// const btn=document.getElementById("btn");

// btn.addEventListener("click",function(){
//     title.textContent="Welcome to Amazon!";
// })


const cartBtn=document.getElementById("cartBtn");

cartBtn.addEventListener("click",function(){
    console.log("Product added");
    
})

const likeBtn=document.getElementById("likeBtn");
likeBtn.addEventListener("click",function(){
   if (likeBtn.innerText==="🤍"){
    likeBtn.innerText="❤️";
   }
   else{
    likeBtn.innerText="🤍";
   }
})


const mode=document.getElementById("mode");
mode.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
})


const login=document.getElementById("login");
login.addEventListener("click",function(){
    let email=document.getElementById("email").value;
    if(email===""){
        alert("enter email")
    }
    else{
        alert("Login")
    }
});


// Mini Project 1
let count=0;
const countText=document.getElementById("count");
const cart=document.getElementById("cart");

cart.addEventListener("click",function(){
    count++;
    countText.innerText=count;
});


// Mini Project 2
// Live Character Counter
const message=document.getElementById("message");
const total=document.getElementById("total");

message.addEventListener("input",function(){
    total.innerText=message.value.length+" Characters";
})



const password=document.getElementById("password");
const toggle=document.getElementById("toggle");

toggle.addEventListener("click",function(){
    if(password.type==="password"){
        password.type="text";
        toggle.innerText="Hide"
    }
    else{
        password.type="password";
        toggle.innerText="show"
    }
})