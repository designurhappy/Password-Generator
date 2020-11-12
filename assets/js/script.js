// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateBtnprompt = function (){
  window.prompt("How many characters would you like your password to contain?");
}
console.log(generateBtnprompt);
generateBtn.addEventListener("click", generateBtnprompt);

if (generateBtnprompt > 0) {
 window.alert("Click OK to confirm including special characters.");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

