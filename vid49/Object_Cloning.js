// Dynamic Nature of Object Meaning 
// -> Object properties can be changed at run time like we added obj color which was not when it was declared and defined

// let obj ={
//     age:12,
//     wt:69,
//     ht:180
// };

// console.log(obj);

// obj.color ="White";
// console.log(obj);



// OBJECT CLONING 
//  Main 3 ways ->

// 1) Spread Operator(...)

// let src ={
//     age:12,
//     wt:69,
//     ht:180
// };

// let dest ={...src};
// src.age = 90; //By changing one item of the object we got confirmation that reference is not made but Clone is made and in the cloned dest value of age remains the same.

// console.log("src: ",src);
// console.log("dest: ",dest);


// 2) Assign Method

// let src ={
//     age:12,
//     wt:69,
//     ht:180
// };

// let src2 = {
//     value:101,
//     name: "Vaibhav Goyal"
// }

// let dest = Object.assign({},src,src2);

// src.age=99;

// console.log("src: ",src);
// console.log("dest: ",dest);



// 3) Iteration Method
// Try avoiding this method

// let src ={
//     age:12,
//     wt:69,
//     ht:180
// };

// let dest = {};
// // Cloning using iteration
// for (let key in src){
//     let newKEY =key;
//     let newValue =src[key];

//     // Insert newKEY and value in dest and create a clone
//     dest[newKEY] = newValue;
// }

// src.age=99;

// console.log("src: ",src);
// console.log("dest: ",dest);



// Garbage Collector
// In programming languages like C++ we allocate heap memory using new keyword and we have to deallocate it manually using free/delete keyword.

// But in Js we have Garbage Collector [GC].
// No control Over it. Runs in background.
// No Memory Leakage || Performance Improvement || Manages Memory Efficiently || Removes No longer Used or unwanted Memory