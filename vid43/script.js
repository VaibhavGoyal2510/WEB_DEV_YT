// Function - Block of code which performs a specific task. Reduces duplicacy, reuse , readiblilty.

// console.log('Crazy');


// Syntax function function_name(parameter){code}

//Function definition
// function sayMyName(){
//     console.log('Crazy');
// }


// Function Use -function call
// sayMyName();



// function printCounting(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }
// printCounting();

// function printNUmber(num){
//     console.log("Printing NUmber:",num);
// }

// printNUmber(5);



// function getAverage(num1,num2){
//     let avg =(num1+num2)/2;
//     console.log("Printing NUmber:",avg);
// }

// getAverage(6,10);


// Return Function

// function getSum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let ans=getSum(1,2,3);

// console.log("Printing Sum",ans);



// function get(fname,lname){
//     let fullname =fname+" "+lname;
//     return fullname;
//     //Unreachable statements
//     // let a=10;
//     // let b=10;
//     // let sum=a+b;
// }

// let fullname=get(7,5);
// console.log("Full Name",fullname);


// const getmul=function(a,b){
//     return a*b;

// }

// console.log(getmul(2,20));



// let Sqnum=function(num){
//     return num*num;
// }

// console.log(Sqnum(9));



// ARROW FUNCTION->Introduced in ES6, arrow functions provide a concise syntax for writing functions, espicially for short anonymous functions.
// let getExp=(x,y)=>{
//     let ans=x**y;
//     return ans;
// }

// console.log(getExp(2,10));


// let str ="CrazyXyZ"

// console.log(str.substring(2,4));


let sentence ="hello bhailog \\jee\\ kaise\\ ho \\saare";

let words= sentence.split('\\');

console.log(words.join(','));