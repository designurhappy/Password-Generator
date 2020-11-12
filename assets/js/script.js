//elements
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
let passwordText = document.querySelector('#password');

//character arrays
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];

let randomPassword = [];

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

//generate password
function generatePassword(arr, number) {
  let newArray = arr.flat();
  let newPassword = [];
  for (let i = 0; i < number; i++) {
      let randomIndex = Math.floor(Math.random() * newArray.length - 1) + 1;
      newPassword.push(newArray[randomIndex]);
  }
  return newPassword.join('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
