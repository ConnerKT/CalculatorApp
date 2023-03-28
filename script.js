// ConnerKT's Calculator App
// (Pseudo Code)
// For this program we want each button to be assigned a value and that value needs to be pushed into "a".
// Value will only be pushed into total when an operator is pressed.
// For example. Press 4. 5. 6. And those are all pushed into "a".



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

// Setting Event Listeners to the buttons
// We are setting our a to a string because strings can be added

// Ex. If we add two Int. (1+1 = 2) but we want if one is clicked multiple times
// we want it to add up in a variable (parseInt) so we can continue clicking numbers
// Also for example if we're trying to do 23, using Ints wont work, so we use strings instead.

let totalHTML = document.getElementById("total");
totalHTML.innerHTML = "0"
let zerobutton = document.getElementById("zero").addEventListener("click", function(){
    a += zero;
    totalHTML.innerHTML += '0';
});
let onebutton = document.getElementById("one").addEventListener("click", function(){
    a += one;
    totalHTML.innerHTML += "1"
});
let twobutton = document.getElementById("two").addEventListener("click", function(){
    a += two;
    totalHTML.innerHTML += "2"
    console.log(a)
});
let threebutton = document.getElementById("three").addEventListener("click", function(){
    a += three;
    totalHTML.innerHTML += "3"
});
let fourbutton = document.getElementById("four").addEventListener("click", function(){
    a += four;
    totalHTML.innerHTML += "4"
});
let fivebutton = document.getElementById("five").addEventListener("click", function(){
    a += five;
    totalHTML.innerHTML += "5"
});
let sixbutton = document.getElementById("six").addEventListener("click", function(){
    a += six;
    totalHTML.innerHTML += "6"
});
let sevenbutton = document.getElementById("seven").addEventListener("click", function(){
    a += seven;
    totalHTML.innerHTML += "7"
});
let eightbutton = document.getElementById("eight").addEventListener("click", function(){
    a += eight;
    totalHTML.innerHTML += "8"
});
let ninebutton = document.getElementById("nine").addEventListener("click", function(){
    a += nine;
    totalHTML.innerHTML += "9"
});

// Setting Event Listenters for the operators/main componenets
let equalbutton = document.getElementById("equal").addEventListener("click", function(){
    console.log("total", total)
    
    totalHTML.innerHTML = total;
    console.log(total)
    parseVar = 0;
});

let multiplybutton = document.getElementById("multiply").addEventListener("click", function(){
    totalHTML.innerHTML = "0";

});
let plusbutton = document.getElementById("plus").addEventListener("click", function(){
    totalHTML.innerHTML = "0";
    let parseVar = parseInt(a)
    total += parseVar;
    a = 0;
    parseVar = 0;
  
});
let subtractbutton = document.getElementById("subtract").addEventListener("click", function(){
    totalHTML.innerHTML = "0";

});
let divisionbutton = document.getElementById("divide").addEventListener("click", function(){
    totalHTML.innerHTML = "0";

})
// If A/C is clicked, clear total, and also associate variables

let clearbutton = document.getElementById("clear").addEventListener("click", function(){
    total = 0;
    a = "0";
    b = "0";
    totalHTML.innerHTML = "0"
});

//Setting Event Listenters for the complex components
// This is gonna be the last part of the program
// let decimalbutton = document.getElementById("decimal").addEventListener("click");
// let percentage = document.getElementById("percentage").addEventListener("click");
// let plusnegativebutton = document.getElementById("negative").addEventListener("click");




// If equal Button is clicked, we want total to be printed
if (equalbutton === true){
    total
}



