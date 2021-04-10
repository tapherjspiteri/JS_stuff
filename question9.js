/*

+ Create a 500 element array and load the array with a series of numbers starting at the first position that
is the square of the index. For example, at position 0 would be 0, at position 1 would be 1, at position 2
       -------------------
would be 4, at position 3 would be 9…. Etc.

+ Ask the user for a number between 0 and 250,000 and let them know if that number is a square.
Employ a binary search.

*/



//create array 0 to 500
arr = Array(501).fill(null).map((u, i) => i);
// create array with squares
var newarray = arr.map(myFunc)
     function myFunc(num) {
  return Math.pow(num,2);
  
}

//get user input
var n = window.prompt("Choose a number between 0 and 250,000: ");

// Perform Binary Search.


