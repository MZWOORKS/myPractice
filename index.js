document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  const result = document.getElementById("cLabel");
  result.innerHTML = "Total: " + c;
};

// ---------------------------------------------

// counter button
let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
// -----------------------------------------------------------

// slice ---
let fullName = "Miguel Zacaula";
let firstName;
let lastName;

lastName = fullName.slice(7);
firstName = fullName.slice(0, 6);

console.log(lastName);
console.log(firstName);

// --------------------------------------------------------------------

// If Statemente --------------------------------------

let age = 21;

if (age >= 18) {
  console.log("your an adult");
} else {
  console.log("youre a child");
}

// --------------------------------------------------------------
