//create an array of numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// create an array of lowercase
var lowerCase = [
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
var upperCase = [
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
var specialCharacters = ["+", "-", "&", "!", "@", "*", "?"];

function generatePassword() {
  let userStop = prompt(
    "How many characters would you like your password to contain?"
  );
  if (userStop < 8) {
    alert("Password length must be 8 characters");
    return;
  }
  if (userStop > 128) {
    alert("Password length cannot be greater than 128");
    return;
  }
  var hasnumbers = confirm("Click ok if you want to have numbers");
  var haslowerCase = confirm("Click ok if you want to have lowercase letters");
  var hasupperCase = confirm("Click ok if you want to have uppercase letters");
  var hasspecialCharacters = confirm(
    "click ok if you want to have special characters"
  );
  if (
    hasnumbers === false &&
    haslowerCase === false &&
    hasupperCase === false &&
    hasspecialCharacters === false
  );
  {
    alert("User must select one character type");
    return generatePassword();
  }

  var Passwordoptions = {
    length: userStop,
    hasnumbers: hasnumbers,
    haslowerCase: haslowerCase,
    hasupperCase: hasupperCase,
    hasspecialCharacters: hasspecialCharacters,
  };
  return Passwordoptions;
}
function generateRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {
  var options = generatePassword();
  var result = [];
  var possibleCharacters = [];
  var definiteCharacters = [];
  if (options.hasspecialCharacters) {
    possibleCharacters.concat(specialCharacters);
    definiteCharacters.push(generateRandom(specialCharacters));
  }
  if (options.haslowerCase) {
    possibleCharacters.concat(lowerCase);
    definiteCharacters.push(generateRandom(lowerCase));
  }
  if (options.hasupperCase) {
    possibleCharacters.concat(upperCase);
    definiteCharacters.push(generateRandom(upperCase));
  }

  if (options.hasnumbers) {
    possibleCharacters.concat(numbers);
    definiteCharacters.push(generateRandom(numbers));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = generateRandom(possibleCharacters);
    result.push(possibleCharacters);
  }
  for (var i = 0; i < definitecharacters.length; i++) {
    result[i] = definiteCharacters[i];
    return result.join("");
  }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Password: " + password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);