// CALL STACK & HOISTING
// Watch 45th video easy explanation
// hoisiting -> process jo variable declaration with var and function declaration ko top of scope mein shift kr deta hai

// saymyname("Babbar");
// function saymyname(finalname){
//     console.log(finalname);
// }

// console.log(age);
// var age=25;



// console.log(age);
// let age =25;


// Using function expression function hoisting nhi ho pati error aati hai
// calci();
// let calci =function(){
//     console.log("HBschab");
// }





// CLASS HOISTING -> not possible
// blueprint is class and actual thing is object
// like blueprint of house and actual house.


// const object1= new Human();
// class Human{

// }





// Function -> First class citizens
// -> Assign to Variable
// let greet =function(){
//     console.log("Greetings for the day");
// }

// greet();


// ->Pass a function
// function greetMe(greet,fulName){
//     console.log("Hello",fulName);
//     greet();
// }
// function greet(){
//     console.log("Greetings for the day");
// }

// greetMe(greet," Vaibhav");



//->Function returns function

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let x=solve(5);
// let finalans=x(10);
// console.log(finalans);



// const arr= [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];

// let first1=arr[2];
// let ans=first1(5,10);

// console.log(ans);




//->Function in Object 
let obj={
    age:25,
    ht:35,
    wt:180,
    greet: ()=>{
        console.log("Hello");
    }
}

console.log(obj.age);
console.log(obj.ht);
obj.greet();