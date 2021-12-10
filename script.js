
// variations of character options
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbers ="1234567890"
var specialCharacters = "!@$%^&*()"

var characters = ""

// creates prompts for character types and adds them to the characters variable
function generatePassword() {
var hasUppercase = confirm("Do you want uppercase letters?")
var hasLowercase = confirm("Do you want lowercase letters?")
var hasNumbers = confirm("Do you want numbers?")
var hasSpecial = confirm("Do you want special characters?")

// adds user choices to characters being used in password
if(hasUppercase) {
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


var passwordLength = 10
var password = "";
    for(var i = 0; i<=passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length); 
        password += characters.substring(randomNumber, randomNumber +1);
    }
    return password
}

// creates red button
var generateBtn = document.querySelector("#generate");

// displays password after creating it
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", displayPassword);

