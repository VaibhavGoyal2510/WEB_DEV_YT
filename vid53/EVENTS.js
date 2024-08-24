// Browser Events -> Announcements done by browser
// Events -> Click , Scrool , Double Click, Key Press->Action
// Respond , Data share, stop, lifecycle


// Event Target -> Entity where event is recieved and probably a work is assigned to occuring event[Event Listner -> where action is located]



// We can add events to elements and also remove them 
// addEventListener removeEventListener
// Syntax ->
// <event-target>.addEventListner(<event-type>,<function-performing action>)





// function changeText(){
//     let fpara =document.getElementById('fpara');
//     fpara.textContent='LovelY';
// }

// let fpara =document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);



// Phases Of an Event 
// addEventListener() By default is applied in bubbling Phase 
// To hit in capturing phase () we need to send usee capture as true.

// Event Object 

// function changeText(event){
//     console.log(event)
//     let fpara =document.getElementById('fpara');
//     fpara.textContent='LovelY';
// }

// let fpara =document.getElementById('fpara');
// fpara.addEventListener('click',changeText);



// Default Action 
// let anchorElement = document.getElementById('fanchor');

// function anchor(event){
//     event.preventDefault();
//     anchorElement.textContent='Click Done Bro';
// }

// anchorElement.addEventListener('click',anchor);



// Avoiding TOOO many Listners
// let paras = document.querySelectorAll('p');

// for (let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         alert("You have Clicked on Para: "+(i+1))
//     })
// } //In this 4 instances are created.

function alertPara(event){
    if(event.target.nodeName === 'SPAN'){
    alert("You have Clicked on Para: "+ event.target.textContent);
    }
}
// for (let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);
// }


// using Div
let myDiv = document.querySelectorAll('wrapper');


document.addEventListener('click',alertPara);


// How to use DOM Content Loaded event to add script Dynamically ?
// ->

// The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This event can be useful when you want to dynamically add a script after the DOM is ready.

// Here’s how you can use the `DOMContentLoaded` event to dynamically add a script:

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Dynamic Script Loading</title>
// </head>
// <body>
//     <h1>Example of Loading a Script Dynamically</h1>

//     <script>
//         document.addEventListener("DOMContentLoaded", function() {
//             // Create a new script element
//             var script = document.createElement('script');
            
//             // Set the source of the script
//             script.src = "path/to/your-script.js";  // Replace with the actual script URL
            
//             // Set other optional attributes
//             script.async = true;  // Load asynchronously
            
//             // Append the script to the head or body
//             document.head.appendChild(script);  // Or document.body.appendChild(script);
            
//             console.log("Script added dynamically after DOMContentLoaded.");
//         });
//     </script>
// </body>
// </html>
// ```

// ### Explanation:
// 1. **`document.addEventListener("DOMContentLoaded", ...)`:** 
//    - This listens for the `DOMContentLoaded` event, ensuring the DOM is fully loaded before executing the function.

// 2. **`document.createElement('script')`:**
//    - Creates a new `<script>` element.

// 3. **`script.src`:**
//    - Specifies the URL of the script to be added dynamically.

// 4. **`document.head.appendChild(script)`:**
//    - Appends the script to the document. You can append it to either the `<head>` or `<body>`.

// 5. **`script.async = true`:**
//    - Optional: Ensures the script loads asynchronously, not blocking the rendering of the page.

// This approach is useful for loading scripts only when needed, reducing the initial page load time.