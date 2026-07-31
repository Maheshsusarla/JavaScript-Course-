// let employee = {
//     id:101,
//     name:"Mahesh",
//     email:"mahesh@gmail.com",
//     salary:50000,
//     department:"Developer"
// }

// console.log(employee);

// what is object :  An object is a collection of key-value pairs used to represent a real-world entity.
// syntax :
// const objectName = {
//     key: value,
//     key: value
// };

// Accessing Object Data:

// Dot Notation // easy to read most commonly used
let employee = {
  id: 101,
  name: "Mahesh",
  email: "mahesh@gmail.com",
  salary: 50000,
  department: "Developer",
};
console.log(employee.name);
// Bracket Notation //dynamic  ,Used when property name is stored in a variable
// console.log(employee["email"]);

// Modifying Object
employee.salary += 5000;
// employee.name = "Python developer";
// console.log(employee.salary);

// Adding New Property
employee.experience = 5;
// console.log(employee);

// Removing Property:
// console.log(employee);
delete employee.experience;
// console.log(employee);

// Nested Objects
let employee = {
  id: 101,
  name: "Mahesh",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560037,
  },
  salary:1000,
  showSalary: function () {
    console.log(this.salary);
  },
};

// console.log(employee.address.city);
employee.showSalary();

// What is this?
// this refers to the current object that is executing the method.

// Objects Inside Arrays
let employees = [
  {
    id: 1,
    name: "Mahesh",
    salary: 50000,
  },

  {
    id: 2,
    name: "Rahul",
    salary: 70000,
  },

  {
    id: 3,
    name: "Amit",
    salary: 65000,
  },
];

for (emp of employees) {
  console.log(emp);
}

// Spread Operator:
const product = {
  name: "Laptop",
  price: 70000,
};
console.log(product);


const updateProduct={
    ...product ,
    discount:15
}
console.log(updateProduct);


// Employee Management System:
let employee={
    id:101,
    name:"mahesh",
    salary:1000,
    department:"developer",
    promote :function(){
        this.salary +=800;
        console.log("promoted");
    },
    show:function(){
        console.log(this.name);
        console.log(this.salary);
    },
}

employee.promote();
employee.show();
