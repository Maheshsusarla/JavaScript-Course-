// math objects

// console.log(Math.PI)
// console.log(Math.E)

// let x = 3.21;
// let y = 2;
// let z;
// z=Math.round(x);
// console.log(z)

// z=Math.floor(x);
// console.log(z)

// z=Math.ceil(x);
// console.log(z)

// z=Math.tan(x);
// console.log(z)

// z=Math.cos(x);
// console.log(z)

// z=Math.trunc(x);
// console.log(z)

// x=81
// z=Math.sqrt(x);
// console.log(z)

// z=Math.pow(x,y);
// console.log(z)

// z=Math.log(x);
// console.log(z)

// console.log(Math.max(x,y))
// console.log(Math.min(x,y))

// x=-2
// z=Math.abs(x);
// console.log(z)

// if statements

// let age=18;
// if (age>=18){
//     console.log("your a young");
// }
// else{
//     console.log("child");
// }

// let time=12;
// if (time<12){
//     console.log("Good Moring");
// }
// else{
//     console.log("Good afternoun");
// }

// let isStudent=false;
// if (isStudent){
//     console.log("your a student");
// }
// else{
//     console.log("Not a student");
// }

// tenary opearot
// let age=12;
// let msg=age<18? "Young man":"your child";
// console.log(msg)

// let isStudent=true;
// let ans=isStudent? "yes he isa student":"Not a Student"
// console.log(ans);

// let num=7;
// let ans=num%2==0?"Even":"Odd";
// console.log(ans);

//switchs
// let day=9;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wedensday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("is not a day");
// }

// let marks=30;
// let grade;
// switch(true){
//     case marks>=90:
//         grade="A";
//         break;
//     case marks>=80:
//         grade="B";
//         break;
//     case marks>=70:
//         grade="C";
//         break;
//     case marks>=55:
//         grade="D";
//         break;
//     case marks>=50:
//         grade="E";
//         break;
//     default:
//         grade="F";
// }
// console.log(grade);

// str methods
// let name="Mahesh";
// console.log(name.charAt(2));
// console.log(name.charAt(1));

// let str = "JavaScript";
// console.log(str.indexOf("S"));

// console.log(str.lastIndexOf("a"));

// console.log(str.length);

// let user_name="           Mahesh";
// console.log(user_name.trim());

// let name="Mahesh";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(name.repeat(5));

// console.log(name.startsWith("Mah"));
// console.log(name.endsWith("sh"));

// let str = "JavaScript";
// console.log(str.includes("Script"));

// let str = "Hello World";
// console.log(str.replace("World","Mahesh"));

// let str = "cat cat cat";
// console.log(str.replaceAll("cat","dog"));

// let num = "5";
// console.log(num.padStart(3,"0"));

// let num = "5";
// console.log(num.padEnd(3,"0"));

// slicing
// const fullname="Mahesh jd Dev";
// let firstname=fullname.slice(0,6);
// let lastname=fullname.slice(6,14);
// let backname=fullname.slice(-1);
// console.log(firstname);
// console.log(lastname);
// console.log(backname);

// method chaning : Method Chaining is a technique where the return value of one method is immediately used to call another method, allowing multiple operations to be performed in a single statement.
// let email=" Mahesh@123Gmail.com";
// let cleaen=email.trim().toLocaleLowerCase();
// console.log(cleaen);


// logical oprators
// let age=17;
// let licince=true;
// console.log(age >=18 && licince);

// let isAdmin = false;
// let isManager = true;
// console.log(isAdmin || isManager);

// let isLoggedIn = true;
// console.log(!isLoggedIn);

// let username = "mahesh";
// let password = "1234";

// if(username === "mahesh" && password === "123"){
//     console.log("Login Success");
// }
// else{
//     console.log("Login Failed");
// }


export function add(a,b){
    return a+b;
}
export function mul(a,b){
    return a*b;
}
