// This is the Javascript for Tafseer' Easy Password Generator

// Generate Button Function is Linked to the Button establish in HTML
var generateBtn = document.querySelector("#generate");
// Function which starts the Password Generator
function generatePassword(){
  // Denote lower case letters (26 chars)
  var ltrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Denote upper case letters (26 chars)
  var upp = ltrs.map(function(x){ return x.toUpperCase(); });
  // Denote numbers (10 chars)
  var num = ["1","2","3","4","5","6","7","8","9","0"];
  // Denote symbols (24 chars)
  var symb =["!","@","#","$","%","^","&","(",")","_","-","+","+","<",",",".",">","/","?","`","~",":",";","'"];
  // Denote allowed characters used for the password, initial value starts with lower case alphabet
  var allowed_char =ltrs;
  // Password is initially not secure with only lower case letters 
  var secure = false;
  // Password is blank until function has completed
  var pw = "";
  confirm("Hello Welcome to Tafseer's Password Generator");
  confirm("Before we begin please make sure to read each dialog, if there is a selection you would like to readjust please press F5 (PC) or Command+R (Mac) to refresh the page");
  // Loop will give dialog options which will request the user to include their choice of character types in passsword 
  // Loop will continue as long as password is "not secure", once atleast one character type is selected password will be marked as "secure"
  while (secure === false){
    // Character choices which can be chosen from are; Uppercase letters, Numbers, and Symbols 
    var upp_yes = confirm("Would you like to include upper case characters in your password?");
    console.log("You would like upper case letters: "+upp_yes);
    var num_yes = confirm("Would you like to include numbers in your password?");
    console.log("You would like numbers: "+num_yes);
    var symb_yes = confirm("Would you like to include symbols in your password?");
    console.log("You would like symbols: "+symb_yes);
    if (upp_yes === true || num_yes === true || symb_yes === true)
      secure = true;
    else{
      confirm("Secure passwords require either upper case letters, numbers, or symbols. Please choose atleast one option.");
  }
}
// Once character types are chosen the allowed characters chosen from the list will be updated to fit the user's choices 
if(upp_yes === true){
  allowed_char =allowed_char.concat(upp)
}
if(num_yes === true){
  allowed_char=allowed_char.concat(num)
}
if(symb_yes === true){
  allowed_char=allowed_char.concat(symb)
}
console.log("Your password characters will be chose from this list:\n"+allowed_char);

// Value for passsword length has not been set and initial value for whether the length is allowed is false 
numcorrect = false;
// Loop will continue to prompt user to enter a password length until password length chosen is between 8 and 128 characters. Only a integer value is accepted. 
while (numcorrect === false){ 
  var numbchar_s = prompt("How many characters would you like in your password?");
  numbchar_i = parseInt(numbchar_s);
    if (numbchar_i >= 8 && numbchar_i <= 128){
      numcorrect = true;
    }
    else{
      confirm("Secure passwords require a password length between 8 and 128, please enter a numerical value between 8 and 128");
    }
}
console.log("Number of characters desired in password: "+numbchar_i);


  for (var i = 1; i<=numbchar_i; i++){
    var random = Math.floor(Math.random()*allowed_char.length);
    pw += allowed_char[random];
  }
  return pw;
}

// Password will be written in place of "Your Secure Password"
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("Your randomly generated password is: "+password);

}

// Button will respond to a click
generateBtn.addEventListener("click", writePassword);

