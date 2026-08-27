// <!-- What is Synchronous?

// Synchronous execution means tasks are executed one after another,
// and the next task starts only after the previous task is completed. -->

// console.log("Page Loaded");

// setTimeout(function () {
//   console.log("Festival Offer");
// }, 5000);

// console.log("Customer Browsing");

// Callback Hell

// Callback Hell is a situation where multiple asynchronous callbacks are nested inside one another,
//  making the code difficult to read and maintain.

// promise
// const order = new Promise((resolve, reject) => {
//   let delivered = false;

//   if (delivered){
//     resolve("Delivered");
//   }
//   else{
//     reject("Cancelled");
//   }
// });

// order
//   .then((result) => {
//     console.log(result);
//   })

//   .catch((error) => {
//     console.log(error);
// });

// API
// API is a communication interface that allows one
//  software system to request or exchange data with another system.

// What is this?

// this is a special JavaScript keyword that refers to the
// object/context associated with the current function invocation. Its value depends on how the function is called.

// const employee = {
//   name: "Mahesh",
//   department: "Development",
//   showDetails: function () {
//     console.log(this.name);
//     console.log(this.department);
//   },
// };

// employee.showDetails();

