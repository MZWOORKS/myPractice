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

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButtonNum").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is the #. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too Small");
  } else {
    alert("Too Large");
  }
  console.log(guess);
};

// ------------------------------------------------------------------------
