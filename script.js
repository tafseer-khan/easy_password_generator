// Assignment Code
var generateBtn = document.querySelector("#generate");
// Denote lower case letters (26)
var ltrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Denote upper case letters (26)
var upp = ltrs.map(function(x){ return x.toUpperCase(); });
// Denote numbers (10)
var num = ["1","2","3","4","5","6","7","8","9","0"];
// Denote symbols (24)
var symb =["!","@","#","$","%","^","&","(",")","_","-","+","+","<",",",".",">","/","?","`","~",":",";","'"];
console.log(symb);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
