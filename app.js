// chapter 5 

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var a = 3;
// var b = 5;

// var c = a + b;

// document.write("sum of 3 and 5 is" + ' ' + c);
// document.write("<br>");

// var a = 3;
// var b = 5;

// var c = a * b;

// document.write("multiplication of 3 and 5 is" + ' ' + c);
// document.write("<br>");
// var a = 3;
// var b = 5;

// var c = a / b;

// document.write("division of 3 and 5 is" + ' ' + c);
// document.write("<br>");

// var a = 3;
// var b = 5;

// var c = a % b;

// document.write("mod of 3 and 5 is" + ' ' + c);
// document.write("<br>");

// var a = 3;
// var b = 5;

// var c = a - b;

// document.write("subtraction of 3 and 5 is" + ' ' + c);
// document.write("<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.



// l. Output : “The remainder is : 0”
// var a;
// document.write("Value after variable declaration is" + ' ' + a);
// document.write("<br>");
// var a = 5;
// document.write("Initial value is"+ ' ' + a);
// document.write("<br>");
// a = a + 1;

// document.write("Value after increment is"+ ' ' + a);
// document.write("<br>");
// a = a + 7;
// document.write("Value after addition is"+ ' ' + a);
// document.write("<br>");
// a--;
// document.write("Value after decrement is"+ ' ' + a);
// document.write("<br>");

// a = a % 3;

// document.write("The reminder is"+ ' ' + a);
// document.write("<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var movieTicket = 600;
// var buyingTicket = 5;

// var result = buyingTicket * movieTicket;

// document.write("The total cost to buy 5 ticket to a movie is "+ ' '+ result + "PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// document.write("<br>");

// var a;
// var number = 4;
// document.write("The table of 4" + "<br>");
// for(i = 1; i <= 10; i++){
//     a =  number * i;
    
//     document.write(" "+ number + "*" + i + "=" +a+ "<br>");
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var clTemp = 25;

// var F = (clTemp * 9/5) + 32;

// var F =( 25 * 9/5) + 32;

// document.write("25"+ '\xB0C is '+ F+ '\xB0F');

// document.write("<br>");

// var fTemp = 70;

// var C = (fTemp - 32) * 5/9;

// var C = (70 - 32) * 5/9;

// document.write("70"+ '\xB0F is '+ C+ '\xB0C');
// document.write("<br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var itemOne = 650;
// var itemTwo = 100;
// var qOne = 3;
// var qTwo = 7;
// var charges = 100;
// var totalone = qOne * itemOne;
// var totaltwo = qTwo * itemTwo;
// var totalCost = charges + totalone + totaltwo;
// document.write("<h1>Shopping Cart</h1>");
// document.write("<br>");
// document.write("The price of item 1 is"+' '+ itemOne );
// document.write("<br>");
// document.write("the quantity of item 1 is"+ ' '+ qOne);
// document.write("<br>");
// document.write("The price of item 2 is"+' '+ itemTwo );
// document.write("<br>");
// document.write("the quantity of item 2 is"+ ' '+ qTwo);
// document.write("<br>");
// document.write("Shipping Charges"+ ' '+ charges );
// document.write("<br>");
// document.write("<br>");
// document.write("Total cost of your order is"+ ' '+ totalCost);
// document.write("<br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var tmarks = 980;
// var mobtained = 804;
// var perc = ((mobtained/tmarks) * 100);
// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>");
// document.write("Total marks:" + ' '+ tmarks);
// document.write("<br>");
// document.write("Marks Obtained:" + ' '+ mobtained);
// document.write("<br>");
// document.write("<br>");
// document.write("percentage:"+' '+ perc + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usd = 10;
// var riyal = 25;
// var pkUsd = 104.80;
// var pkRiyal = 28;
// var tusdpkr = usd * pkUsd ;
// var triyalpkr = riyal * pkRiyal;
// var totalCurrency = tusdpkr + triyalpkr;

// document.write("<h1>Currency in PKR</h1>")
// document.write ("<br>");
// document.write("Total currency in PKR: "+ ' '+ totalCurrency );

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// document.write ("<br>");


// var a = 3;

// var result = (a + 5) * 10 /2;

// document.write(result);
// document.write ("<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

    // var year = 2021;
    // var birthYear = 1998;
    // var yearsOld = year - birthYear;
    // document.write("<h1>Age Calculator</h1>");
    // document.write ("<br>");
    // document.write("They are either"+' '+ yearsOld + " or" + ' '+ (yearsOld-1) + " years old");
    // document.write ("<br>");

//     12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radius = 20;
// var cF = 2 * 3.124 * 20;
// document.write("The radius is"+ ' '+ radius);
// document.write ("<br>");
// document.write("The circumfences of a circle is"+ ' '+ cF);



// var radius = 20;
// document.write("radius is"+' '+radius);
// document.write ("<br>");

// var circumference = Math.PI * 2*radius;
// document.write("The circumference is " + circumference);
// document.write ("<br>");
// var area = (Math.PI * radius*radius).toFixed(1);
// document.write("area is"+ area);
// document.write ("<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var snack = "chocolate";

// var age = 22;
// var maxAge = 50;
// var esamount = 2;

// var totaleat = (esamount * maxAge) * (age - maxAge);

// document.write("totaleat" + totaleat);
// var snack = "chocolate";
// var age = 22;
// var maxAge = 50;
// var numPerDay = 2;
// var totalNeeded = (numPerDay * 365) * (maxAge - age);
// var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
// document.write(message);

// document.write("<br>");
// document.write("<br>");


// chapter 6 to 9


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;

// document.write("the value of a is:"+' '+ a);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// ++a;
// document.write("the value of ++a is:"+' '+ a);
// document.write("<br>");

// document.write("Now the value of a is:" + a);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("the value of a++ is:"+' '+ a);
// document.write("<br>");

// a++;
// document.write("Now the value of a is:" + a);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// --a;
// document.write("the value of --a is:"+' '+ a);
// document.write("<br>");

// document.write("Now the value of a is:" + a);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");


// document.write("the value of --a is:"+' '+ a);
// document.write("<br>");
// a--;
// document.write("Now the value of a is:" + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a= 2;
// var b =1;
// var result = --a - --b + ++b + b--;

// document.write("a is:"+ a);
// document.write("<br>");

// document.write("b is:"+ b);
// document.write("<br>");

// document.write ("result is:" + result);

// document.write("<br>");
// document.write("<br>");

// 3. Write a program that takes input a name from user &
// greet the user.


// var number = parseInt(prompt("Enter a number"));

// for(i = 1; i <= 10; i++){
//     a =  number * i;
    
//     document.write(" "+ number + "*" + i + "=" +a+ "<br>");
// }

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var number = parseInt(prompt("Enter a number", "5"));

// var a;
// for(i=1; i<=10; i++){
//     a = i * number;
// document.write("<tr><td>" + number + "*" + i + " = " + a + "<br>" + "</td></tr>");

// }


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var subjectone = parseInt(prompt("Enter your subject name"));
// var subjecttwo = parseInt(prompt("Enter your subject name"));
// var subjectthree = parseInt(prompt("Enter your subject name"));

// var subone = subjectone;
// var subtwo = subjecttwo;
// var subthree = subjectthree;


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

// chapter 12 to 13


// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower cas


// var ch = prompt("Enter a number or string");

// if(ch >=65 && ch<=90) {
//     document.write(" the character is a capital letter " + ch);
// }else if(ch>=97 && ch<=122) {
//     document.write("character is a small letter")
// }else {
//     document.write("you have entered wrong number");
// 
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.



// var num1, num2;
// num1 = +prompt("Input the First integer", "0");
// num2 = +prompt("Input the second integer", "0");
// a=10;
// if (num1 > a && num2 < a) {
//     console.log("The larger no of " + num1 + " and " + num2 + " is " +num1 + "." );
// }
// else if (num2 > a && num1 < a ){
//     console.log("The larger no of " + num2 + " and " + num1 + " is " +num2 + "." );

// }                  
// else if (num1 === num2)
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }
//   else {
//       console.log("you have entered 2 integer value less than 10");
//   }

// 3.Write a program that takes input a number from user &
// state whether the number is positive, negative or zero

// var num = +prompt("Enter a number");
// if( num > 0) {
//     alert("positive");
// }else if (num < 0) {
//     alert("negative");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


// var vowels = 

// var i = +prompt("Enter a string");
  
//         if (vowels === i) {
//             alert("true");
//         }else {
//             alert("false");
//         }
    
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPassword = "ammar";

// var userpassword =prompt("Enter his/her password");
// if (userpassword === correctPassword) {
//     alert("user has entered password");
// }else {
//     alert("please enter your password");
// }
// var userpassword =prompt("please enter confirmation password");
// if (userpassword === correctPassword) {
//     alert("Correct!");
// }else {
//     alert("incorrect password");
// }


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) 
// greeting = "Good day";
// else
// greeting = "Good evening";
// }



// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(" " + greeting);
// }
// else{
// greeting = "Good evening";
// alert(" " + greeting);

// }


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("Enter a time");

// if (time >= 0000 && time < 1200) {
//     alert("Good morning!");
// }else if (time >= 1200 & time < 1700){
//     alert("Good Afternoon");
// }else if (time >= 1700 && time < 2100) {
//     alert ("Good Evening");
// }else if(time >= 2100 && time <=2359) {
//     alert("Good night");
// }


// chap 14 to 16 

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = [];

// Declare and initialize a strings array

// var arr = ["ammar", "yousuf", "abrahani"];

// Declare and initialize a numbers array.

// var numbers = [13, 20,  15, 16];

// 5. Declare and initialize a boolean array.

// var boolean =[true, false];

// 6. Declare and initialize a mixed array.

// var arr = ["ammar", 15, true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")

// for (i=0;i<education.length; i++){
//     document.write(" "+ education[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuname = ["ammar", "nabeel", "zohaib"];

// var score = [320, 230, 480];

// var totalmarks = 500;
// var per;
// for(var i=0; i<stuname.length; i++){
//     document.write("score of " +stuname[i]  + " is:" +score[i] );
//     per = ((score[i]/totalmarks * 100)).toFixed(0);
//     document.write(" percentage: "+ per + " % " + "<br>");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red","green","blue","yellow"];

// var userclr1 = prompt("Enter the color and add to the beginning of array");
// var userclr2 = prompt("Enter the color and add to the beginning of array");
// var userclr3 = prompt("Enter the color and add to the beginning of array");
// var userindex = +prompt("Enter a index number","enter a second index ");
// colors.unshift(userclr1);
// colors.unshift(userclr2);
// colors.unshift(userclr3);
// colors.shift(userclr1);
// colors.pop();
// colors.slice(userindex);
// //  var newarry = colors;

// for (var i=0; i<colors.length; i++){
//     document.write("  " + colors[i]   + "  ");
//     // document.write("<br>");
//     // document.write("" + colors[i] +  "<br>");

// }
// document.write ("<h1>pop</h1>")
// document.write("" + colors + "<br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320, 230, 480, 120];
// document.write("score " +score);
// document.write("<br>")
// score.sort();
// document.write("ordered scores of students:");
// for(var i=0; i < score.length; i++) {
//     document.write(" " +score[i]);
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(" <h1>Cities list:</h1> ")

// document.write(" " + cities);

// cities = cities.slice(2 , 4);
// document.write(" <h3>Selected cities list:</h3> ")
    
// document.write(" " + cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", " is ", " my ", " cat"];
// document.write("Array: "+ "<br>");

// document.write(" "+arr);
// document.write("<br>")
// document.write("<br>")

// document.write("String:  ");

// document.write("<br>")
// var b = arr.join(" ");
// document.write(""+ b  );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// chap 14 to 16 

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = [];

// Declare and initialize a strings array

// var arr = ["ammar", "yousuf", "abrahani"];

// Declare and initialize a numbers array.

// var numbers = [13, 20,  15, 16];

// 5. Declare and initialize a boolean array.

// var boolean =[true, false];

// 6. Declare and initialize a mixed array.

// var arr = ["ammar", 15, true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")

// for (i=0;i<education.length; i++){
//     document.write(" "+ education[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuname = ["ammar", "nabeel", "zohaib"];

// var score = [320, 230, 480];

// var totalmarks = 500;
// var per;
// for(var i=0; i<stuname.length; i++){
//     document.write("score of " +stuname[i]  + " is:" +score[i] );
//     per = ((score[i]/totalmarks * 100)).toFixed(0);
//     document.write(" percentage: "+ per + " % " + "<br>");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red","green","blue","yellow"];

// var userclr1 = prompt("Enter the color and add to the beginning of array");
// var userclr2 = prompt("Enter the color and add to the beginning of array");
// var userclr3 = prompt("Enter the color and add to the beginning of array");
// var userindex = +prompt("Enter a index number","enter a second index ");
// colors.unshift(userclr1);
// colors.unshift(userclr2);
// colors.unshift(userclr3);
// colors.shift(userclr1);
// colors.pop();
// colors.slice(userindex);
// //  var newarry = colors;

// for (var i=0; i<colors.length; i++){
//     document.write("  " + colors[i]   + "  ");
//     // document.write("<br>");
//     // document.write("" + colors[i] +  "<br>");

// }
// document.write ("<h1>pop</h1>")
// document.write("" + colors + "<br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320, 230, 480, 120];
// document.write("score " +score);
// document.write("<br>")
// score.sort();
// document.write("ordered scores of students:");
// for(var i=0; i < score.length; i++) {
//     document.write(" " +score[i]);
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(" <h1>Cities list:</h1> ")

// document.write(" " + cities);

// cities = cities.slice(2 , 4);
// document.write(" <h3>Selected cities list:</h3> ")
    
// document.write(" " + cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", " is ", " my ", " cat"];
// document.write("Array: "+ "<br>");

// document.write(" "+arr);
// document.write("<br>")
// document.write("<br>")

// document.write("String:  ");

// document.write("<br>")
// var b = arr.join(" ");
// document.write(""+ b  );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// chap 14 to 16 

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = [];

// Declare and initialize a strings array

// var arr = ["ammar", "yousuf", "abrahani"];

// Declare and initialize a numbers array.

// var numbers = [13, 20,  15, 16];

// 5. Declare and initialize a boolean array.

// var boolean =[true, false];

// 6. Declare and initialize a mixed array.

// var arr = ["ammar", 15, true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")

// for (i=0;i<education.length; i++){
//     document.write(" "+ education[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuname = ["ammar", "nabeel", "zohaib"];

// var score = [320, 230, 480];

// var totalmarks = 500;
// var per;
// for(var i=0; i<stuname.length; i++){
//     document.write("score of " +stuname[i]  + " is:" +score[i] );
//     per = ((score[i]/totalmarks * 100)).toFixed(0);
//     document.write(" percentage: "+ per + " % " + "<br>");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red","green","blue","yellow"];

// var userclr1 = prompt("Enter the color and add to the beginning of array");
// var userclr2 = prompt("Enter the color and add to the beginning of array");
// var userclr3 = prompt("Enter the color and add to the beginning of array");
// var userindex = +prompt("Enter a index number","enter a second index ");
// colors.unshift(userclr1);
// colors.unshift(userclr2);
// colors.unshift(userclr3);
// colors.shift(userclr1);
// colors.pop();
// colors.slice(userindex);
// //  var newarry = colors;

// for (var i=0; i<colors.length; i++){
//     document.write("  " + colors[i]   + "  ");
//     // document.write("<br>");
//     // document.write("" + colors[i] +  "<br>");

// }
// document.write ("<h1>pop</h1>")
// document.write("" + colors + "<br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320, 230, 480, 120];
// document.write("score " +score);
// document.write("<br>")
// score.sort();
// document.write("ordered scores of students:");
// for(var i=0; i < score.length; i++) {
//     document.write(" " +score[i]);
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(" <h1>Cities list:</h1> ")

// document.write(" " + cities);

// cities = cities.slice(2 , 4);
// document.write(" <h3>Selected cities list:</h3> ")
    
// document.write(" " + cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", " is ", " my ", " cat"];
// document.write("Array: "+ "<br>");

// document.write(" "+arr);
// document.write("<br>")
// document.write("<br>")

// document.write("String:  ");

// document.write("<br>")
// var b = arr.join(" ");
// document.write(""+ b  );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// chap 14 to 16 

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr1 = [];

// Declare and initialize a strings array

// var arr = ["ammar", "yousuf", "abrahani"];

// Declare and initialize a numbers array.

// var numbers = [13, 20,  15, 16];

// 5. Declare and initialize a boolean array.

// var boolean =[true, false];

// 6. Declare and initialize a mixed array.

// var arr = ["ammar", 15, true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")

// for (i=0;i<education.length; i++){
//     document.write(" "+ education[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuname = ["ammar", "nabeel", "zohaib"];

// var score = [320, 230, 480];

// var totalmarks = 500;
// var per;
// for(var i=0; i<stuname.length; i++){
//     document.write("score of " +stuname[i]  + " is:" +score[i] );
//     per = ((score[i]/totalmarks * 100)).toFixed(0);
//     document.write(" percentage: "+ per + " % " + "<br>");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red","green","blue","yellow"];

// var userclr1 = prompt("Enter the color and add to the beginning of array");
// var userclr2 = prompt("Enter the color and add to the beginning of array");
// var userclr3 = prompt("Enter the color and add to the beginning of array");
// var userindex = +prompt("Enter a index number","enter a second index ");
// colors.unshift(userclr1);
// colors.unshift(userclr2);
// colors.unshift(userclr3);
// colors.shift(userclr1);
// colors.pop();
// colors.slice(userindex);
// //  var newarry = colors;

// for (var i=0; i<colors.length; i++){
//     document.write("  " + colors[i]   + "  ");
//     // document.write("<br>");
//     // document.write("" + colors[i] +  "<br>");

// }
// document.write ("<h1>pop</h1>")
// document.write("" + colors + "<br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score = [320, 230, 480, 120];
// document.write("score " +score);
// document.write("<br>")
// score.sort();
// document.write("ordered scores of students:");
// for(var i=0; i < score.length; i++) {
//     document.write(" " +score[i]);
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(" <h1>Cities list:</h1> ")

// document.write(" " + cities);

// cities = cities.slice(2 , 4);
// document.write(" <h3>Selected cities list:</h3> ")
    
// document.write(" " + cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", " is ", " my ", " cat"];
// document.write("Array: "+ "<br>");

// document.write(" "+arr);
// document.write("<br>")
// document.write("<br>")

// document.write("String:  ");

// document.write("<br>")
// var b = arr.join(" ");
// document.write(""+ b  );

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);
// var b = arr.shift();
// document.write("<br>");
// document.write(" "+b);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var arr = [];
// document.write("<h3>Devices:</h3>");
// document.write("<br>");
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");

// document.write(" "+arr);
// document.write("<h3>Out:</h3>");
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);
// document.write("<br>");
// var b = arr.pop();
// document.write("<br>");
// document.write(" "+b);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
