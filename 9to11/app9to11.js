// chapter 9to11 

// var css = parseInt(prompt("Enter your english number"));
// var js  = parseInt(prompt("Enter your english number"));

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("enter your city");

// if(city === "karachi"){
//     document.write("<h1>Welcome to city of lights</h1>");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender");

// if (gender === "male"){
//     document.write( "Good Morning Sir");
    
// }
// else if(gender === "female"){
//     document.write("Good Morning Maa'am");
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("Enter a color");
// if (color === "red"){
//     alert("must stop");
// }else if(color === "yellow"){
//     alert("ready to move");
// }else if (color === "green" ) {
//     alert("move to now")
// }else {
//     alert("you have entered wrong color");
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
// var fuel = prompt("Enter remaining fuel");

// var currentfuel = 0.25;

// if(fuel < currentfuel){
//     alert("Please refill the fuel in your car");
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var mobtained = +prompt("Enter a marks obtained in 3 subject");
// var totalmarks = +prompt("enter total marks");
// var per = ((mobtained/totalmarks * 100)).toFixed(1);

// document.write("<h1>Marks Sheet</h1>" );
// document.write("<br>");

// document.write("Total marks"+ totalmarks );
// document.write("<br>");
// document.write("Marks Obtained" +mobtained );
// document.write("<br>");

// document.write("per"+per);
// document.write("<br>");

// if(per >= 80) {
//     document.write("Grade: A-one");
// }else if (per >= 70){
//     document.write("Grade: A");
// }else if(per >= 60){
//     document.write("Grdae: B");
// }else if (per < 60){
//     document.write("Fail");
// }else{
//     document.write("Remarks: you need to improve");
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretno = 5;
// var guessno = +prompt("Enter the guess number");

// if (guessno === secretno){
//     alert("Bingo! Correct answer");
// }
// else if(guessno === secretno + 1){
//     alert("close enough to the correct no");
// }



// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.




// var number = prompt("enter your number");
//  if (number % 3 === 0) {
//      alert("your number is divisible by 3");
//  }else {
//      alert("not divisble by 3");
//  }


// 9. Write a program that checks whether the given input is an
// even number or an odd number

// var number = prompt("enter your number");
//  if (number % 2 === 0) {
//      alert("your number is even");
//  }else {
//      alert("number is odd");
//  }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = prompt("Enter a temperature");

// if (temp > 40 ){
//     alert("It is too hot outaide");

// }else if(temp > 30) {
//     alert("The weather today is normal");
// }else if(temp  > 20){
//     alert("Today's weather is cool");
// }else if (temp > 10){
//     alert("OMG! Today's weather is so cool");
// }else {
//     alert("there is no temperature");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// var no1 = +prompt("Enter your first number");
// var op = prompt("Enter operator");
// var no2 = +prompt("Enter your second no");
// var result;
// if (op === '+') {
//    result = no1 + no2;
// }else if(op === '*') {
//     result = no1 * no2;
// }else if(op === '-') {
//     result = no1 - no2;
// }else if(op === '/') {
//     result = no1 / no2;
// }else if(op === '%') {
//     result = no1 % no2;
// }else {
//     document.write("you entered wrong value");
// }

// document.write(" "+no1+ op + no2 +' '+ "="+ result);