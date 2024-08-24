// 1) Compile Time Errors


// Syntax Error
// console.log(1;



// 2) Run Time Errors
// Reference Error
// console.log(x);



// Handling  [Try - Catch Block]



// try{
//     console.log("Try starts here");
//     // Error -> Reference Error
//     console.log(x);
//     console.log("Try ends here");
// }
// catch(e){
//     // Define krte hai ki error ke saath kya krna hai
//     // Retry Logic
//     // Fallback Mechanism
//     // Logging
//     // Custom Error
//     console.log("I am Inside Catch Block",e);
// }
// // Finally block -> runs everytime
// finally{
//     console.log("I will Run Everytime, as I am finally block");
// }



// Custom Errors Using Throw

// try{
//     // Refernce error

//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai pehle declare kro, fer print karna");
// }


let errCode = 100;
if(errCode == 100){
    throw new Error("Invalid Json");


}