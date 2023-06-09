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
let a = "";
let b = "";
let c = "";
let total = 0;
let state = "False";

function parsing(p1){
   let parsed1 = parseInt(p1)
    return parsed1;
}


// Setting Event Listeners to the buttons
// We are setting our a to a string because strings can be added

// Ex. If we add two Int. (1+1 = 2) but we want if one is clicked multiple times
// we want it to add up in a variable (parseInt) so we can continue clicking numbers
// Also for example if we're trying to do 23, using Ints wont work, so we use strings instead.


let totalHTML = document.getElementById("total");
totalHTML.innerHTML = ""
let zerobutton = document.getElementById("zero").addEventListener("click", function(){
    if (state == "True"){
        b += zero;
    }else if(state == "False"){
      a += zero;  
    }
    totalHTML.innerHTML += '0';
});
let onebutton = document.getElementById("one").addEventListener("click", function(){
    if (state == "True"){
        b += one;
    }else if(state == "False"){
      a += one;  
    }
    totalHTML.innerHTML += "1"
});
let twobutton = document.getElementById("two").addEventListener("click", function(){
    if (state == "True"){
        b += two;
    }else if(state == "False"){
      a += two;  
    }
    totalHTML.innerHTML += "2"
    console.log(a)
});
let threebutton = document.getElementById("three").addEventListener("click", function(){
    if (state == "True"){
        b += three;
    }else if(state == "False"){
      a += three;  
    }
    totalHTML.innerHTML += "3"
});
let fourbutton = document.getElementById("four").addEventListener("click", function(){
    if (state == "True"){
        b += four;
    }else if(state == "False"){
      a += four;  
    }
    totalHTML.innerHTML += "4"
});
let fivebutton = document.getElementById("five").addEventListener("click", function(){
    if (state == "True"){
        b += five;
    }else if(state == "False"){
      a += five;  
    }
    totalHTML.innerHTML += "5"
});
let sixbutton = document.getElementById("six").addEventListener("click", function(){
    if (state == "True"){
        b += six;
    }else if(state == "False"){
      a += six;  
    }
    totalHTML.innerHTML += "6"
});
let sevenbutton = document.getElementById("seven").addEventListener("click", function(){
    if (state == "True"){
        b += seven;
    }else if(state == "False"){
      a += seven;  
    }
    totalHTML.innerHTML += "7"
});
let eightbutton = document.getElementById("eight").addEventListener("click", function(){
    if (state == "True"){
        b += eight;
    }else if(state == "False"){
      a += eight;  
    }
    totalHTML.innerHTML += "8"
});
let ninebutton = document.getElementById("nine").addEventListener("click", function(){
    if (state == "True"){
        b += nine;
    }else if(state == "False"){
      a += nine;  
    }
    totalHTML.innerHTML += "9"
});

// Setting Event Listenters for the operators/main componenets
let equalbutton = document.getElementById("equal").addEventListener("click", function(){
    
    if (c === "multiply"){
        
        total = parsing(a) * parsing(b)
        console.log(c)
    }else if (c === "plus"){
        total = parsing(a) + parsing(b)
    }else if (c === "subtract"){
        total = parsing(a) - parsing(b)
    }else if (c === "divide"){
        total = parsing(a) / parsing(b)
    }
    console.log(a)
    console.log(b)
    console.log(total)
    totalHTML.innerHTML = total;
});

let multiplybutton = document.getElementById("multiply").addEventListener("click", function(){
    totalHTML.innerHTML = "0";
    c = "multiply";
    state = "True";
});
let plusbutton = document.getElementById("plus").addEventListener("click", function(){
    totalHTML.innerHTML = "0";
    c = "plus";
    state = "True";
  
});
let subtractbutton = document.getElementById("subtract").addEventListener("click", function(){
    totalHTML.innerHTML = "0";
    c = "subtract";
    state = "True";

});
let divisionbutton = document.getElementById("divide").addEventListener("click", function(){
    totalHTML.innerHTML = "0";
    c = "divide";
    state = "True";

})
// If A/C is clicked, clear total, and also associate variables

let clearbutton = document.getElementById("clear").addEventListener("click", function(){
    total = 0;
    a = "";
    b = "";
    c = "";
    totalHTML.innerHTML = "0"
    state = "False"
});

//Setting Event Listenters for the complex components
// This is gonna be the last part of the program
// let decimalbutton = document.getElementById("decimal").addEventListener("click");
// let percentage = document.getElementById("percentage").addEventListener("click");
// let plusnegativebutton = document.getElementById("negative").addEventListener("click");



