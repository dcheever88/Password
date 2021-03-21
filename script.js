// Assignment code here

// character codes
var upperCase = arrayFromLowToHigh(65, 90);
var lowerCase = arrayFromLowToHigh(97, 122);
var numberCase = arrayFromLowToHigh(48, 57);
var symbolCase = arrayfromLowToHigh(33,47)
  .concat(arrayfromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
  
  // generate password
  let writePassword = (
    characterLength,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) => {
    let charCodes = upperCase;
    if (includeUppercase) charCodes = charCodes.concat(upperCase);
    if (includeSymbols) charCodes = charCodes.concat(symbolCase);
    if (includeNumbers) charCodes = charCodes.concat(numberCase);
    var passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      var characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
  };

  // generate characters
  function arrayFromLowToHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  };

  
  var aray = ["a", "b", "c", "d", "e"];
  var blankString = ("");

  for (var i = 0; i < aray.length; i++) {
    aray[Math.floor(Math.random(aray.length))];
    blanketString.push(String.fromaray);
  };

  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
