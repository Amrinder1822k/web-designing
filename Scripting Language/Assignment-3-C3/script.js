// HOMEWORK 4
// Create a program showing a specific message:
// -----------------------------------------------------
// | Age range | Comment example                      |
// | 1 to 17   | You are not a major yet.             |
// | 18 to 49  | You are major, but not senior yet.   |
// | 50 to 64  | You are senior, but not yet retired. |
// ___________________________________________________ --
// Algorithm:
// STEP 1: Take age from user.
// STEP 2: if age is between 1 to 17, display: You are not a major yet.
// STEP 3: if age is between 18 to 49 , display: You are major, but not senior yet.
// STEP 4: if age is between 50 to 64, display: You are senior, but not yet retired.
// END

// SOLUTION for HOMEWORK 4 STARTS HERE
var age = Number(prompt("Enter your age:"));  // STEP 1

// STEP 2
if(age >= 1 && age <= 17){
    alert('You are not a major yet.')
}

// STEP 3
if(age >= 18 && age <= 49){
    alert('You are major, but not senior yet.')
}

// STEP 4
if(age >= 50 && age <= 64){
    alert('You are senior, but not yet retired.')
}


// SOLUTION for HOMEWORK 4 ENDS HERE


// COURSE 4:
// WHAT ARE LOOPS?
// ITS TYPES?: while, do-while, for

// Start from 1
// alert("Hello");
// End from 5001


// Exercise 6:
// Display "Hello" 4 times to the user.
// alert("Hello");
// alert("Hello");
// alert("Hello");
// alert("Hello");


// Exercise 7:
// Display "Hello" 10 times to the user by using while loop.
// start -> 1 and end -> 10
var i = 1;
while(i <= 10){   // start -> 1 and i is smaller than or equal to 10
    alert("Hello"); // Actual code. i = 1
    i = i + 1; // i = 1 + 1 => i = 2
} // i = 2 stop & go to start at line 42 


// Homework 5:
// Display "Bonjour" 25 times to the user by using while loop.
// start -> 1 and end -> 25

// SOLUTION for HOMEWORK 5 STARTS HERE
var i = 1;
while(i <= 25){   // start -> 1 and i is smaller than or equal to 25
    alert("Bonjour");
    i = i + 1; 
} 
// SOLUTION for HOMEWORK 5 ENDS HERE

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// 1. Ask user some number and perform calculation on it and then alertit to the user.
// 2. Ask user some number  and perform if else.
// 3. While loop
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// BUNNYGROPER@GMAIL.COM