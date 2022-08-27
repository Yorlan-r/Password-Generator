// Assignment code here

// Functions for random characters.

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}

function generatePassword() {

while (true) {

  var userInput = window.prompt("How long do you want your password to be?")

  // If user cancels the password generator.
  
  if (userInput === null)
  return
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Oops! That is not a number!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 chracters!")
  } else {
    break
  }
}
  // User password prompts.

  var userWantsNumbers = window.confirm("Would you like to include numbers in your Password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your Password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase in your Password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase in your Password?")

  // Random list for password generator.

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var lowercaselist = ["a", "s", "d", "f", "g", "h", "q", "e", "r", "t", "y", "u", "i", "c", "b", "n", "m"]
var uppercaseList = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Q", "W", "E", "R", "T", "Y", "C", "V", "B", "N", "M", "P"]

var optionsCart = []



if (userWantsNumbers === true) {
  optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaselist)
}

if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}

  if (optionsCart.length === 0){
    optionsCart.push(lowercaselist)
  }
  

var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatePassword += randomChar
}

return generatePassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
