// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
    // alerts? 
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
    // alerts offer choices for upper, lower, number, and special 
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
    // need var for passwordLength and limitations
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    //  toLowerCase or toUpperCase 
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
    
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// 0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbers ="1234567890"
var specialCharacters = "!@$%^&*()"

var characters = ""

function generatePassword() {
var hasUppercase = confirm("Do you want uppercase letters?")
    // if(!hasUppercase) {
    //     return alert("You must have uppercase letters. Sorry!")
    // }
var hasLowercase = confirm("Do you want lowercase letters?")
var hasNumbers = confirm("Do you want numbers?")
var hasSpecial = confirm("Do you want special characters?")
// var characterCount = prompt("How long do you want your password to be? (Must be at least 8 characters.)")
if(hasUppercase){
    characters += uppercaseCharacters
}
if(hasLowercase){
    characters += lowercaseCharacters
}
if(hasNumbers){
    characters += numbers
}
if(hasSpecial){
    characters += specialCharacters
}
if(characters.length === 0){
    alert("You have to pick something.")
    generatePassword()
}


var passwordLength = []
var password = "";
    for(var i = 0; i<=passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length); 
        password += characters.substring(randomNumber, randomNumber +1);
    }
    return password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);

