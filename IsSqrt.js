//get user input
var n = window.prompt("Choose a number between 0 and 250,000: ");
console.log(n);  //logged for testing, comment out later or delete.

//find sqrt of a number
var ntest = Math.sqrt(n)

// is it a perfect square  returns true or false
var isInt = Number.isInteger(ntest)

// determine if if is integer alertbox "Perfect Square"

if (isInt == true) {
    response = "is a perfect square";  
    }else {
        response = "is not a perfect square" ;
    }    
alert ((n + response))

