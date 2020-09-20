// var <VARIABLE_NAME> = <ASSIGN_VALUE>

// Exercise 1: Create a integer variable name foo and assign 34 to it.
var foo = 34;

// Exercise 2: Create a string variable name doo & assign Hello World! to it.
var doo = 'Hello World!';
var doo = "Hello World!";


// Exercise 3: Take name, Roll no, mobile no. & email-id from the user and save it in a variable.
// var name = prompt("Enter your name");
// var roll_no = prompt("Enter your Roll no.");
// var mobile_no = prompt("Enter your mobile no.");
// alert("NAME: "+ name + "\nROLL NO.:" + roll_no + "\nMOBILE NO.:" + mobile_no);


// Homework 1: Take radius from the user.
// Calculate circumference: 2 * PIE * radius
// Calculate surface area: PIE(3.14) * radius * radius
// Display Circumference and surface area.
// var radius = Number(prompt("Enter radius:"));
// var circumference = 2 * 3.14 * radius;
// var surfaceArea = 3.14 * radius * radius;
// alert("Circumference: " + circumference + "\nSurface Area: " + surfaceArea);



// Things which we have learned(Course 1 and 2)
// 1. How to integrate javascript file in html.
// 2. How to create a variable like Number & strings.
// 3. How to take variable from a User: prompt().
// 4. How to display the variable to the User: alert().


// Exercise 4
// A -> 50
// B -> 100
// Comparison between A & B. (which number is smaller & largest)
// Take 2 numbers from the user A & B. Find the smallest one.
// var A = 50;
// var B = 100;

// if(A > B){
// 	alert("A is largest, B is smallest.");
// }

// if(A < B){
// 	alert("B is largest, A is smallest.");
// }


// Exercise 5
// Ask user to input A and B. Then display which number is smallest and largest.
// var A = Number(prompt("Enter number A:"));
// var B = Number(prompt("Enter number B:"));

// if(A > B){
// 	alert("A is largest, B is smallest.");
// }

// if(A < B){
// 	alert("B is largest, A is smallest.");
// }

// Homework 2: 
// Ask user to input A, B & C. Then display which number is smallest and largest.
// A -> 11
// B -> 10
// C -> 5
// Check if A is greater than (B & C), then display A is greater.
// Check if B is greater than (A & C), then display B is greater.
// Check if C is greater than (A & B), then display C is greater.

// Solution to Homework 2:
// STEP 1: Take A,B & C from the user.
var A = Number(prompt("Enter A:"));
var B = Number(prompt("Enter B:"));
var C = Number(prompt("Enter C:"));

// STEP 2: Check if A is greater than (B & C), then display A is greater.
if(A > B && A > C){
	alert("A is greater!")
}

// STEP 3: Check if B is greater than (A & C), then display B is greater.
if(B > A && B > C){
	alert("B is greater!")
}

// STEP 4: Check if C is greater than (A & B), then display C is greater.
if(C > A && C > B){
	alert("C is greater!")
}