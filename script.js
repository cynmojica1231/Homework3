//create an array of numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// create an array of lowercase
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// create an array of uppercase
[
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// create special character
["+", "-", "&", "!", "@", "*", "?"];

function generatePassword() {
  generatePasswordoptions();
}

function generatePasswordoptions() {
  let userStop = prompt("Enter Password Length");
  if (userStop < 8) {
    alert("Password length must be 8 characters");
    return;
  }
  if (userStop > 128) {
    alert("Password length cannot be greater than 128");
    return;
  }
  var hasnumbers = confirm("click ok if you want to have numbers");
  var haslowercase = confirm("click ok if you want to have lowercase letters");
  var hasuppercase = confirm("click ok if you want to have uppercase letters");
  var hasspecialcharacters = confirm(
    "click ok if you want to have special characters"
  );
  if (
    hasnumbers === false &&
    haslowercase === false &&
    hasuppercase === false &&
    hasspecialcharacters === false
  ) {
    alert("User must select one character type");
    return;
  }
  var Passwordoptions = {
    length: userStop,
    hasnumbers: hasnumbers,
    haslowercase: haslowercase,
    hasuppercase: hasuppercase,
    hasspecialcharacters: hasspecialcharacters,
  };
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
