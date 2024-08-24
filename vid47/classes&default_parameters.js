//  Classes -> Blueprint
// Object -> Actual thing made using that blueprint. 


// class Human{
//     // properties
//     age=13; //public
//     #wt=80; //private
//     ht=100;
//     constructor_example;

//     constructor(newAge, newHeight,newWeight){
//         this.age=newAge;
//         this.ht=newHeight;
//         this.#wt = newWeight;
//     }

//     // Behaviour
//     walking(){
//         console.log("I am Walking" , this.#wt);//For accessing the private variable we will use this.var_name
//     }

//     running(){
//         console.log("I am running");
//     }
    
//     // Now to Update and fetch private member we use getter and setter , they work as their name suggests. 
//     // As we know we can't access private element out of the class so to access them out of the class we use getter and setter
//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt =val ;
//     }
// }


// let obj= new Human(50,190,101);

// console.log(obj.fetchWeight);

// obj.walking();



// Constructor -> If we have a variable in the class let's say in this case constructor_example. Now, it does not have any value and we want to initialise it with some value so we will be using constructor



// Default Paramter -> allow to use functions with default values. (parameter="Default value")
// function sayName(myName="Prabhuji dev"){
//     console.log("My Name is:",myName);
// }
// sayName()


// function sayName(fName='CRazy', lName='Slayer'){
//     console.log("My Name is: ",fName," ",lName);
// }
// sayName("op","true");




// // One parameter dependent on another parameter
// function sayName(fName='CRazy', lName = fName.toUpperCase()){
//     console.log("My Name is: ",fName," ",lName);
// }
// sayName("op");


// // We can insert object
// function solve(value ={age:20,wt:70,ht:160}){
//     console.log("Hello Ji", value);
// }

// solve();


// We can insert array
// function solve(value = ["Crazy","Lovely","MasterX"]){
//     console.log("Hello Ji", value);
// }

// solve();




// If we send Null and unidenti
// function solve(value = "Crazy"){
//     console.log("Hello Ji ->", value);
// }

// solve(undefined); 


// Use function in default parameter
function getAge() {
    return 190;
    }

function ujtility (name="Lovw", age=getAge()) {
    console.log(name, age);
}


ujtility();