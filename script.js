//Prompt for password length
var passLength = window.prompt("Enter password length (8-128 characters)");

// If unacceptable response given, create an alert
if (passlength < 8 || passlength > 128) {
  alert("There needs to be between 8 and 128 characters");
} else if (!passLength >=8 && !passlength <=128) {
   alert("That is not a number that I understand");
  return;
} 

//Prompt for character types
var includeUpperCase = confirm("Do you want to include upper case letters?")
var includeLowerCase = confirm("Do you want to include lower case letters?")
var includeNumber = confirm("Do you want to include numbers?")
var includeSymbol = confirm("Do you want to include special characters?")

if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSymbol) {
  alert("Your password must contain at least one character type");
  return;
}

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var symbol = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','-','=','/','.',',']

var keys = {

}

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

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
