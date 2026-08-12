// Why preventDefault()?

// Normally, submitting a form causes the browser to perform its default submission behavior, 
// often navigating/reloading.

const employeeForm=document.getElementById("employeeForm");
const result=document.getElementById("result");
employeeForm.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const department=document.getElementById("department").value.trim();

    if(name===""){
        alert("name is required");
        return;
    }
    if(email===""){
        alert("name is required");
        return;
    }
    if(department===""){
        alert("select is required");
        return;
    }

    const listItems=document.createElement("li")
    listItems.textContent=`emp name is ${name} and emp email is ${email} and depet is ${department}`;
    
   result.appendChild(listItems)


});

// ket down
const search=document.getElementById("search")
search.addEventListener("keydown",function(event){
    console.log(event.key);
    console.log("key pressed");
})

// key up
search.addEventListener("keyup",function(event){
    console.log(event.key);
    console.log('key relesed');
})


// focus
const email=document.getElementById("email");
const help=document.getElementById("help");
// email.addEventListener("focus",function(){
//     help.innerHTML="use your own email"
// })

// blur
email.addEventListener("blur",function(){
    if(email===""){
        help.innerHTML="email is required"
    }
})


const form =
    document.getElementById("registerForm");

const message =
    document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (name === "") {

        message.innerText =
            "Name is required";

        return;
    }


    if (email === "") {

        message.innerText =
            "Email is required";

        return;
    }


    if (password.length < 8) {

        message.innerText =
            "Password must contain at least 8 characters";

        return;
    }


    if (password !== confirmPassword) {

        message.innerText =
            "Passwords do not match";

        return;
    }


    message.innerText =
        "Registration successful!";

});


const employees = [
    {
        id: 101,
        name: "Mahesh Kumar",
        department: "Development",
        salary: 45000
    },

    {
        id: 102,
        name: "Rahul Sharma",
        department: "Testing",
        salary: 40000
    },

    {
        id: 103,
        name: "Priya Reddy",
        department: "HR",
        salary: 50000
    },

    {
        id: 104,
        name: "Arjun Singh",
        department: "Development",
        salary: 55000
    }
];

function displayEmployees(data) {

    container.innerHTML = "";

    data.forEach(function(employees) {

        const card = document.createElement("div");

        card.innerHTML = `
            <h2>${employee.name}</h2>

            <p>ID: ${employee.id}</p>

            <p>Department: ${employee.department}</p>

            <p>Salary: ₹${employee.salary}</p>

            <button onclick="deleteEmployee(${employee.id})">
                Delete
            </button>
        `;

        container.appendChild(card);

    });

}

displayEmployees(employees);