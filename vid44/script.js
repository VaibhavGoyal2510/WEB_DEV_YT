// let obj ={
//     "name": "Love",
//     age: 25,
//     weight:70,
//     height:"5ft 6in",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// }

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));

//Shallow copy->obj2 naam ka reference ban gya par alag se koi object nhi ban rha hai ye bhi ussi block of code ko jo heap mein hain usspr point kr rha hai.
//What is shallow copy and deep copy?
// ->
// let obj2=obj;


// Arrays -> Collections of items 
// let arr=[1,2,3,4,5];
// let brr=new Array('love',1,true);
// console.log(brr);
// console.log(typeof(brr));


// console.log(brr[0]);






// Built In Method In Array
// Push-> insert at end of array
//Pop-> Remove from array
// brr.push("Crazyy");
// console.log(brr);
// brr.pop();
// console.log(brr);



// shift-> Removes first element,unshift->add element to left most element
// brr.shift();
// brr.unshift("HBSDHUVSC");
// console.log(brr);




// slice->Creates a new part Syntax->array.slice(starting location,ending[note this is not tincluded])
// splice->content change [insert replace remove]
// array.splice(from_index,to_index,"replace with"); 
// brr.push(20);
// brr.push(40);
// brr.push(70);

// console.log(brr);
// console.log(brr.slice(2,4));

// brr.splice(1,2,'kunal');
// console.log(brr);


// MAP->
// let carr=[10,20,30];

// let ansarray=carr.map((number)=>{
//     return number*number;
// })


// console.log(ansarray);
// carr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })


// FILTER-> bade data mein se filtered out data
// let carr=[10,20,30,11,21,44,51];
// let ans=carr.filter((number)=>{
//     return number%2===0;
//     // if(number%2===0)
//     //     return true;
//     // else
//     //     return false;
// })
// console.log(ans);

// let carr=[1,2,'love','kunal',null];
// let ans=carr.filter((value)=>{
//     if(typeof(value)==='string')
//         return true;
//     else
//         return false; 
// })

// console.log(ans);




// REDUCE-> complex calculation krke 1 value chahiye tw ye use hota hai.
// It has accumulator and current.In this for eg we have an array ->['a','b','c','d'] and we initialize accumulator with 'y' so current will be on 'a' . 
// Another case can be in which if we do not initialise the accumulator so it will automatically take 'a' as accumulator that is the first value and current will be now on 'b'.
// let carr=[10,20,30,40];
// let ans=carr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)// ,0 se accumulator 0 se initialise ho jayega.
// console.log(ans);



// sort
// let arr=[2,4,1,2,5,8,4,6];
// arr.sort();
// console.log(arr);





// indexof
// console.log(arr.indexOf(8));




// find 





// for each
let arr=[10,20,30];

arr.forEach((value,index)=>{
    console.log("NUmber: ",value, " Index: ",index);
})



