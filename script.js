
function generateOptions() {
  //Arrays for all possible characters to be included in password
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  var symbol = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','-','=','/','.',','];

  //Prompt for character types
  var includeUpperCase = confirm("Do you want to include upper case letters?");
  var includeLowerCase = confirm("Do you want to include lower case letters?");
  var includeNumber = confirm("Do you want to include numbers?");
  var includeSymbol = confirm("Do you want to include special characters?");

  var passLength = window.prompt("Enter password length (8-128 characters)");

 
  // If unacceptable response given, create an alert
  if (!(passLength >=8 && passLength <=128)) {
    alert("That password length is not an answer I can use");
    return;
  } 

  //If no character types are selected, create an alert
  if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSymbol) {
    alert("Your password must contain at least one character type");
   return;
  }
  //Defining pool of characters to include in generated password
  var characterOptions = [];

  if (includeUpperCase) {
    characterOptions=characterOptions.concat(upperCase);
  }
  if (includeLowerCase) {
    characterOptions=characterOptions.concat(lowerCase);
  }
  if (includeNumber) {
    characterOptions=characterOptions.concat(number);
  }
  if (includeSymbol) {
    characterOptions=characterOptions.concat(symbol);
  }

   //Removing quotation marks from string
  var characterPool = characterOptions.join('');

  //Generating password to appropriate length
  nearlyFinalPass = [];
  for(var i=0; i < passLength; i++) {
   var charSelect = Math.floor(Math.random() * characterPool.length);
    nearlyFinalPass.push(characterPool[charSelect])
  }

  //Remove commas from password output
  var finalPass = nearlyFinalPass.join('');

  // Write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.innerHTML = finalPass;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to button
generateBtn.addEventListener("click", generateOptions);

