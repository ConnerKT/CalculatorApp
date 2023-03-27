// ConnerKT's Calculator App
// (Pseudo Code)
// For this program we want each button to be assigned a value and that value needs to be pushed into "a".
// Value will only be pushed into total when an operator is pressed.
// For example. Press 4. 5. 6. And those are all pushed into "a".




// Setting Event Listeners to the buttons
// We are setting our a to a string because strings can be added

// Ex. If we add two Int. (1+1 = 2) but we want if one is clicked multiple times
// we want it to add up in a variable (parseInt) so we can continue clicking numbers
// Also for example if we're trying to do 23, using Ints wont work, so we use strings instead.

let zerobutton = document.getElementById("zero").addEventListener("click", function(event){
    let a = zero;
});
let onebutton = document.getElementById("one").addEventListener("click", function(event){
    let a = one;
});
let twobutton = document.getElementById("two").addEventListener("click", function(event){
    let a = two;
});
let threebutton = document.getElementById("three").addEventListener("click", function(event){
    let a = three;
});
let fourbutton = document.getElementById("four").addEventListener("click", function(event){
    let a = four;
});
let fivebutton = document.getElementById("five").addEventListener("click", function(event){
    let a = five;
});
let sixbutton = document.getElementById("six").addEventListener("click", function(event){
    let a = six;
});
let sevenbutton = document.getElementById("seven").addEventListener("click", function(event){
    let a = seven;
});
let eightbutton = document.getElementById("eight").addEventListener("click", function(event){
    let a = eight;
});
let ninebutton = document.getElementById("nine").addEventListener("click", function(event){
    let a = nine;
});

// Setting Event Listenters for the operators/main componenets
let equalbutton = document.getElementById("equal").addEventListener("click", function(event){
    // Equal the result 
});
let multiplybutton = document.getElementById("multiply").addEventListener("click");
let plusbutton = document.getElementById("plus").addEventListener("click", function(event){
    container =+ parseInt(a);
    a = 0;
});
let subtractbutton = document.getElementById("subtract").addEventListener("click");
// If A/C is clicked, clear total, and also associate variables

let clearbutton = document.getElementById("clear").addEventListener("click", function(event){
    let total = 0;
    let a = "0";
    let b = "0";
});

//Setting Event Listenters for the complex components
// This is gonna be the last part of the program
let decimalbutton = document.getElementById("decimal").addEventListener("click");
let percentage = document.getElementById("percentage").addEventListener("click");
let plusnegativebutton = document.getElementById("negative").addEventListener("click");


// Setting Variables that set our placeholder variable to the number (string)
let zero = "0";
let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
let six = "6";
let seven = "7";
let eight = "8";
let nine = "9";

// Our containers for a number
let a = 0;
let b = 0;
let container = 0;
let total = 0;

// If equal Button is clicked, we want total to be printed
if (equalbutton === true){
    total
}



