// Assignment Code
var generateBtn = document.querySelector("#generate");
// Denote lower case letters (26 chars)
var ltrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Denote upper case letters (26 chars)
var upp = ltrs.map(function(x){ return x.toUpperCase(); });
// Denote numbers (10 chars)
var num = ["1","2","3","4","5","6","7","8","9","0"];
// Denote symbols (24 chars)
var symb =["!","@","#","$","%","^","&","(",")","_","-","+","+","<",",",".",">","/","?","`","~",":",";","'"];
var allowed_char =ltrs;
console.log(allowed_char);
var upp_yes = confirm("Would you like to include upper case characters in your password?");
console.log("You would like upper case letters: "+upp_yes);
var num_yes = confirm("Would you like to include numbers in your password?");
console.log("You would like numbers: "+num_yes);
var symb_yes = confirm("Would you like to include symbols in your password?");
console.log("You would like symbols: "+symb_yes);
var numbchar_s = prompt("How many characters would you like in your password?")

if(upp_yes === true){
  allowed_char =allowed_char.concat(upp)
}
if(num_yes === true){
  allowed_char=allowed_char.concat(num)
}
if(symb_yes === true){
  allowed_char=allowed_char.concat(symb)
}
console.log(allowed_char);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
