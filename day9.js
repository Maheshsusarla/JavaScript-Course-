// events :

// An Event is an action or occurrence that happens in the browser, either performed by the
//  user (click, typing, scrolling) or by the browser itself (page load, resize). 
// JavaScript listens for these events and executes specific code in response.

// What is addEventListener()?
// It attaches an event listener to an HTML element and executes a callback function whenever the specified event occurs.

// What is the Event Object?

// The Event Object contains information about the event, such as which key was pressed,
//  which mouse button was clicked, and which element triggered the event.

const product=document.getElementById("product");
product.addEventListener("mouseover",function(){
    product.style.transform="scale(1.2)"
});


product.addEventListener("mouseout",function(){
    product.style.transform="scale(1)"
})


let qty=1;
const quantity=document.getElementById("qty");
const plus=document.getElementById("plus");

plus.addEventListener("click",function(){
    qty++;
    quantity.innerText=qty;
})

const minus=document.getElementById("minus");
minus.addEventListener("click",function(){
    if(qty>1){
        qty--;
        quantity.innerText=qty;
    }
});


const photo=document.getElementById("photo");
const status=document.getElementById("status");
photo.addEventListener("dblclick",function(){
    status.innerText= "❤️ Liked";
})


// input value
const search=document.getElementById("search");
search.addEventListener("input",function(){
    console.log(search.value);
})

const text=document.getElementById("text");
const value=document.getElementById("value");
text.addEventListener("input",function(){
    console.log(value.value);
    value.innerText = text.value;
})

// change event
const country = document.getElementById("country");
const result = document.getElementById("result");

country.addEventListener("change", function() {
    console.log(country.value);
    result.innerText = "Selected: " + country.value;
});

// submit
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

});

// const country=document.getElementById("change",function(){
//     console.log(country.value);
// })

// const loginForm=document.getElementById("loginForm");
// loginForm.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("validate");
// })

