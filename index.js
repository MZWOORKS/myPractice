// document.getElementById("submitButton").onclick = function () {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);

//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   const result = document.getElementById("cLabel");
//   result.innerHTML = "Total: " + c;
// };

// ---------------------------------------------

// counter button
// let count = 0;

// document.getElementById("decreaseBtn").onclick = function () {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };
// document.getElementById("resetBtn").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("increaseBtn").onclick = function () {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };
// -----------------------------------------------------------

// slice ---
// let fullName = "Miguel Zacaula";
// let firstName;
// let lastName;

// lastName = fullName.slice(7);
// firstName = fullName.slice(0, 6);

// console.log(lastName);
// console.log(firstName);

// --------------------------------------------------------------------

// If Statemente --------------------------------------

// let age = 21;

// if (age >= 18) {
//   console.log("your an adult");
// } else {
//   console.log("youre a child");
// }

// --------------------------------------------------------------

// -- checked property -----

// document.getElementById("myButton").onclick = function () {
//   const visaBtn = document.getElementById("visaBtn");
//   const masterCardBtn = document.getElementById("masterCardBtn");
//   const dicoverBtn = document.getElementById("discoverBtn");

//   const myCheckBox = document.getElementById("myCheckBox");
//   if (myCheckBox.checked) {
//     alert("youre suscribe");
//   } else {
//     alert("your not suscribe");
//   }

//   if (visaBtn.checked) {
//     alert("paying with visa");
//   } else if (masterCardBtn.checked) {
//     alert("paying with mastercard");
//   } else if (discoverBtn.checked) {
//     alert("paying with Dicover");
//   } else {
//     alert("you must select payment type");
//   }
// };

// -------------------------------------------------------------

// ************** SWITCH

// let grade = "a";
// grade = grade.toUpperCase();

// switch (grade) {
//   case "A":
//     console.log("you did great");
//     break;
//   case "B":
//     console.log("you did good");
//     break;
//   case "C":
//     console.log("you did ok ");
//     break;
//   default:
//     console.log(grade, "is not a letter grade");
// }

// --------------------------------------------------------------

// ********* && AND || OR

// let temp = 25;
// let sunny = true;

// if (temp > 0 && temp < 30 && sunny) {
//   alert("the weather is good");
// } else {
//   alert("the wether is bad");
// }

// ----------------------------------------------------

// *********** ! NOT Logical Operator

// let temp = 19;

// if (!(temp > 0)) {
//   alert("is cold outside");
// } else {
//   alert("is warm outside");
// }

// ------------------------------------------------------------

// *********** WHILE LOOP

// let userName = "";

// while (userName == "" || userName == null) {
//   userName = window.prompt("enter your name");
// }

// console.log("Hello", userName);

// ---------------------------------------------------------------------------

// *********** DO WHILE LOOP

// let userName;

// do {
//   userName = window.prompt("enter your name");
// } while (userName == "" || userName == null);

// console.log("Hello", userName);

// ------------------------------------------------------------------------

// *********** FOR LOOP

//  for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// ------------------------------------------------------------------------

// *********** Break, Continue

// for (let i = 1; i <= 20; i += 1) {
//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }

// ------------------------------------------------------------------------

// *********** NESTED LOOPS

// let symbol = window.prompt("enter a symbal to use");
// let rows = window.prompt("enter # of rows");
// let columns = window.prompt("enter # of columns");

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= columns; j++) {
//     document.getElementById("myRectangle").innerHTML += symbol;
//   }
//   document.getElementById("myRectangle").innerHTML += "<br/>";
// }

// ------------------------------------------------------------------------

// *********** FUNCTIONS

// startProgram();

// function startProgram() {
//   let userName = "MIGUEL";
//   let age = 21;
//   happyBitrhday(userName, age);
// }

// function happyBitrhday(userName, age) {
//   console.log("happy birthday to you!");
//   console.log("happy birthday to you!");
//   console.log("happy birthday dear", userName);
//   console.log("happy birthday to you!");
//   console.log("you are", age, " yeard old");
// }

// ------------------------------------------------------------------------

// ***********  RETURN STATEMENT

// return = return a value back to the place
//          where you invoked a function

// let area;
// let width;
// let height;

// width = window.prompt("enter widht");
// height = window.prompt("enter height");

// area = getArea(width, height);
// console.log(area);

// function getArea(width, height) {
//   return width * height;
// }

// ------------------------------------------------------------------------

// ***********  TERNARY OPERATOR
// ternary operator = Shortcut for an "if/else stament"

//                  takes 3 openrands
//                  1. a condition with ?
//                  2. expression if True :
//                  3. expression if False

//  condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(14);
// console.log(adult);

// function checkAge(age) {
//   return age >= 18 ? true : false;
// }

// checkWinner(true);

// function checkWinner(win) {
//   win ? console.log("winner") : console.log("loose");
// }

// ------------------------------------------------------------------------

// ***********   VARIABLE SCOPE

// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// ------------------------------------------------------------------------

// *********** TEMPLATE LITERALS
// Template literals = delimited with(`)
//                     instead of double single quotes
//                     allows embedded variables and expressions

// let userName = "Miguel";
// let items = 3;
// let total = 75;

// console.log(
//   `Hello ${userName} You have ${items} items in your car, your total is $${total}`
// );

// ------------------------------------------------------------------------

// *********** toLocaleString()

// toLocaleString() = returns a string with a lenguage
//                    sensitive representation of this number

// ------------------------------------------------------------------------

// *********** NUMBER GUESSING NAME

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButtonNum").onclick = function () {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1;

//   if (guess == answer) {
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   } else if (guess < answer) {
//     alert("Too Small");
//   } else {
//     alert("Too Large");
//   }
//   console.log(guess);
// };

// ------------------------------------------------------------------------

// *********** TEMPERATURE CONVERSION PROJECT

// document.getElementById("submitButtonTemp").onclick = function () {
//   let temp;
//   if (document.getElementById("cButton").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toCelsius(temp);

//     document.getElementById("tempLabel").innerHTML = temp;
//   } else if (document.getElementById("fButton").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);

//     document.getElementById("tempLabel").innerHTML = temp;
//   } else {
//     document.getElementById("tempLabel").innerHTML = "Select a Unit";
//   }
// };

// function toCelsius(temp) {
//   return (temp - 32) * (5 / 9);
// }

// function toFahrenheit(temp) {
//   return (temp * 9) / 5 + 32;
// }

// ------------------------------------------------------------------------

// *********** ARRAYS

// array = think of it as a variable
//         that can store multiple values

// let fruit = ""

// =++++++ LOOP TROUGHT AN ARRAY

// let prices = [5, 10, 12, 44];

// // for (let i = 0; i < prices.length; i++) {
// //   console.log(prices[i]);
// // }

// for (let price of prices) {
//   console.log(price);
// }

// ++++++ SORT AN ARRAY

// let fruits = ["banana", "apple", "orange", "mango"];

// // fruits = fruits.sort();
// fruits = fruits.reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// ------------------------------------------------------------------------

// *********** 2D ARRAYS

// let fruits = ["aple", "pranges", "bananas"];
// let vegetables = ["carrots", "onion", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "mangos";

// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// ------------------------------------------------------------------------

// *********** SPREAD OPERATOR
// spread operator = allows an iterable such as an
//                   array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)

// let userName = "Miguel Zacaula";
// let nunbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(...userName);

// ------------------------------------------------------------------------

// *********** REST PARAMETERS
// rest parameters = represents an indefinite number
//                   of parameters
//                   (pack arguments into an array)
//

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c));

// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }

// ------------------------------------------------------------------------

// ***********   CALLBACK

// callback = a function passed as an argument
//            to another function
//
//     Ensures that a function is not going
//     to run before a task is completed.
//     Helps us develop asynchronus code.
//     (When one funtion has to wait for another function)
//     that helps us avoid errors and potential problems
//     Ex. Wait for a file to load

// let total = sum(2, 3);
// displayConsole(total);
// displayDOM(total);

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabelCallBack").innerHTML = output;
// }

// ##########################CALLBACK EXEMPLE

// sum(2, 3, displayConsole);

// function sum(x, y, callback) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabelCallBack").innerHTML = output;
// }

// ------------------------------------------------------------------------

// *********** ARRAY.FOREACH() = executes a provided callback function
//                               once for each array element

// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//   console.log(element);
// }
// ------------------------------------------------------------------------

// *********** ARRAY.MAP()
// array.map() = executes a privided callback funtion
//               once for each array element
//               AND creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function print(element) {
//   console.log(element);
// }

// ------------------------------------------------------------------------

// *********** ARRAY.FILTER
// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function
//

// let ages = [18, 14, 43, 44, 13];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// ------------------------------------------------------------------------

// ***********ARRAY.REDUCE()
// array.reduce() = reduces an array to a single value

// let prices = [4, 5, 12, 44, 55];
// let total = prices.reduce(checkOut);

// console.log(`the total is ${total}`);

// function checkOut(total, element) {
//   return total + element;
// }

// ------------------------------------------------------------------------

// *********** SORT NUMBERS

// let grades = [19, 33, 22, 68, 54, 99];

// grades = grades.sort(descendingSort);
// grades.forEach(print);

// function descendingSort(x, y) {
//   return y - x;
// }

// function print(element) {
//   console.log(element);
// }

// ------------------------------------------------------------------------

// *********** FUNCTION EXPRESSION
// function expression = function without a name(anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it.

// const greeting = function () {
//   console.log("hello");
// };

// greeting();

// ------------------------------------------------------------------------

// *********** ARROW FUNCTIONS
// arrow function = compact alternative to a traditional function
//                =>

// REGULAR FUNCTION???????-------
// const greating = function (userName) {
//   console.log(`hello ${userName}`);
// };

// greating("mike");
// ++++++++++++>>>>>>>>>>>>>>>>>>>>>>>

// Arrow function aqui abajito
// const greating = (userName) => console.log(`Hello ${userName}`);

// greating("mike");

// let grades = [100, 50, 90, 60, 80, 90];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

// ==================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ------------------------------------------------------------------------

// *********** SHUFFLE AN ARRAY

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

shuffle(cards);

cards.forEach((card) => console.log(card));

function shuffle(array) {
  let currentIndex = array.lenght;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.lenght);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

// ------------------------------------------------------------------------
