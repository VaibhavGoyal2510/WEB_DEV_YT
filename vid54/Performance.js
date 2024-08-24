// Performance Improvemnet -> How to know which code is faster || Which is Efficient /good Practise.


// Code 1
// const t1 =performance.now();
// // console.log(t1);
// for (let i=1;i<=100;i++){
//     let para =document.createElement('p');
//     para.textContent = "This is para "+i;
//     document.body.appendChild(para);
// }
// Timing Of code
// Standard way in Js to know time taken by code to run is Performance.now() method
// const t2 =performance.now();
// // console.log(t2);

// console.log("Total time taken By Code 1 : ", (t2-t1));

// // Code 2
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let para =document.createElement('p');
//     para.textContent='Div para '+i;
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);

// const t4=performance.now();

// console.log("Tie taken by Code -2 ",t4-t3);





// BEST CODE
const t1=performance.now();
let fragment =document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent="This is Para "+i;
    // No reflow and No repaint for the below line
    fragment.appendChild(para);
}

// This below line takes 1 Reflow and 1 Repaint
document.body.appendChild(fragment);
const t2=performance.now();

console.log("Best Code Time taken: ",t2-t1);

// Kabhi ho skta hai code 2 achha time lele aur best code zyada lekin dono hi achhe hai