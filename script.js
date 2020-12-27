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
var secure = false;
confirm("Hello Welcome to Tafseer's Password Generator");
confirm("Before we begin please make sure to read each dialog, if there is a selection you would like to readjust please press F5 (PC) or Command+R (Mac) to refresh the page");
while (secure === false){
  var upp_yes = confirm("Would you like to include upper case characters in your password?");
  console.log("You would like upper case letters: "+upp_yes);
  var num_yes = confirm("Would you like to include numbers in your password?");
  console.log("You would like numbers: "+num_yes);
  var symb_yes = confirm("Would you like to include symbols in your password?");
  console.log("You would like symbols: "+symb_yes);
  if (upp_yes === true || num_yes === true || symb_yes === true)
    secure = true;
  else{
    confirm("Passwords require either upper case letters, numbers, or symbols. Please choose atleast one option.");
  }
}

numcorrect = false;
while (numcorrect === false){ 
  var numbchar_s = prompt("How many characters would you like in your password?");
  numbchar_i = parseInt(numbchar_s);
    if (numbchar_i >= 8 && numbchar_i <= 128){
      numcorrect = true;
    }
    else{
      confirm("Please enter a numerical value between 8 and 128");
    }
}
console.log("Number of characters desired in password: "+numbchar_i);

if(upp_yes === true){
  allowed_char =allowed_char.concat(upp)
}
if(num_yes === true){
  allowed_char=allowed_char.concat(num)
}
if(symb_yes === true){
  allowed_char=allowed_char.concat(symb)
}
console.log("Your password characters will be chose from this list:"+allowed_char);
console.log(allowed_char);
var ac_index = allowed_char.length-1;
console.log(ac_index);

function generatePassword(){
  var pw = "";
  for (var i = 1; i<=numbchar_i; i++){
    var random = Math.floor(Math.random()*allowed_char.length);
    pw += allowed_char[random];
  }
  return pw;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
