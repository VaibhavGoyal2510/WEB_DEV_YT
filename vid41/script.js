// Types 
// Arithmetic Operator->
// 1) Unary Operator-> single operand a++
// 2)Binary Operator-> 2 operands  a+b 


// console.log("Yelobhed");

// let a=2;
// let b=5;
// console.log(a**b);




// Unary 
// Pre Increment - Pehle Increment kro Fir use kro
// console.log(++a);


// Post Increment - Pehle Use kro Fir Increment Kro
// console.log(a++);

// Similar for Decrement.




// Assignment Operator
// let a =5;  equal to here is assignment operator.
// a=a+10; or a+=10;
// a=a-5; or a-=5;
// a=a*3; or a*=3;
// a=a/2; or a/=2;

// let a=10;

// console.log(a+=2);



//   Loose Equality
// console.log("5"==5);




// Strict Equality
// Checks number and also Data Type 
// In the below case it will be False
// console.log('5'===5);



// Ternary Operator

// Syntax  (Condition)?val1:val2

// let age=20;
// let status =(age>18)?'I can vote':'I cannot vote';
// console.log(status);



//Logical Operator
// And -> && - sab true tabhi true aayega
// OR -> // - sab false tw hi false agr ek bhi true hua tw true
// NOT -> ! false ka true , true ka false


// let ans =(true && false && true);
// console.log(ans);


// let ans =(false || false || false);
// console.log(ans);


// let ans =!(false);
// console.log(ans);



// Working with non booleans

// Falsy - undefined, null, zero, false, not a number (Nan), empty string.

// Truthy - anything other than falsy


// Short Circuiting - pehle true milte hi aage check nhi kiya 

// console.log(false || 'crazy '|| 7 || 11)


// BitWise Operators
// AND -> &
// Or -> |
// NOT -> ~
// << - Left shift
// >> - Right shift
// XOR -> ^

// a AND b 
//  a   b   o/p
//  0   0    0
//  1   0    0
//  0   1    0
//  1   1    1


// a OR b
//  a   b   o/p
//  0   0    0
//  1   0    1
//  0   1    1
//  1   1    1


// a XOR b  (same pr 0, different pr 1)
//  a   b   o/p
//  0   0    0
//  1   0    1
//  0   1    1
//  1   1    0



console.log(~0);
// The answer for this is -1.
// how ? - In NOT it gives just opposite likewise,
// for true it gives false and for false it gives true, similarly for bits it gives 0 for 1 and 1 for 0. So in this case all 0 were converted into 1.
// Now we know that the MSB i.e the most significant bit is 1 then the number is negative.
// So , we got answer for -ve. Now to represent -ve number we take 2's complement of the number.
// first we take 1's complement so all become 0, now we added 1 to it so answer comes out to be 1.
// This is how we get ~0 as -1.




// LEFT SHIFT - Whenever we left shift a number then it is multiplied by 2 i.e the answer comes num*2 . Eg 5<<1 -> 10 (5x2^1) another example is 5<<2 -> 20 (5X2^2).
console.log(10>>1);


// RIGHT SHIFT - Whenever we right shift a number then it is divided by 2. Reverse of left shift.



// Conditionals 
// IF else
// Syntax - if(condition){} else {}; 
// Eg ->
// let age =19;
// if (age>=18){
//     console.log('vote my friend');
// }
// else{
//     console.log('Cannot vote');
    
// }

// // If else-if else
// // Eg ->
// let num =44;
// if(num==1){
//     console.log('A');
// }
// else if(num==2){
//     console.log('B');
// }
// else if(num==3){
//     console.log('C');
// }
// else if(num==4){
//     console.log('D');
// }
// else if(num==5){
//     console.log('E');
// }

// else{
//     console.log('Crazy');
// }



// Switch
// Syntax -> Switch (expression){
//                   case 1: console.log('A');
//                   case 1: console.log('B');
//                   case 1: console.log('C');
//                   case 1: console.log('D');
//                   default : console.log('E');
// }

let num=3
switch(num){
                  case 1: console.log('A');
                  break;
                  case 2: console.log('B');
                  break;
                  case 3: console.log('C');
                  break;
                  case 4: console.log('D');
                  break;
                  default : console.log('E');
}