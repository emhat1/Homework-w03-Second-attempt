//Prompt for password length
var passLength = window.prompt("Enter password length (8-128 characters)");

// If unacceptable response given, create an alert
if (passLength < 8 || passLength > 128) {
  alert("There needs to be between 8 and 128 characters");
  return;
} else if (!passLength >=8 && !passLength <=128) {
   alert("That is not a number that I understand");
   return;
} 

//Prompt for character types
var includeUpperCase = confirm("Do you want to include upper case letters?")
var includeLowerCase = confirm("Do you want to include lower case letters?")
var includeNumber = confirm("Do you want to include numbers?")
var includeSymbol = confirm("Do you want to include special characters?")

//If no character types are selected, create an alert
if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSymbol) {
  alert("Your password must contain at least one character type");
  return;
}

//Arrays for all possible characters to be included in password
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var symbol = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','-','=','/','.',',']


//Defining pool of characters to include in generated password
var characterOptions = [];

if includeUpperCase {
  characterOptions.concat(upperCase);
}
if includeLowerCase {
  characterOptions.concat(lowerCase);
}
if includeNumber {
  characterOptions.concat(number);
}
if includeSymbol {
  characterOptions.concat(symbol);
}

//Generating password to appropriate length
finalPass = [];
for(var i=0; i < passLength; i++) {
  var charSelect = Math.floor(Math.random() * characterOptions.length);
  finalPass.push(characterOptions[charSelect])
}

//Removing quotation marks from string
var veryFinalPass = finalPass.join('');

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyToClipBoardButton = document.getElementById("#copy");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copy password to clipboard
function copytoClipboard() {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Your password has now been copied to the clipboard");
}

// Add event listener to buttons
generateBtn.addEventListener("click", writePassword);
copyToClipBoardButton.addEventListener('click', copytoClipboard);