// var range = document.createElement ("input='range'");
// var numbers = document.createElement ("input='number'");
// <input type="range">
// <input type="number">

// // function startGenerator () {
//     var range = document.createElement("input");

// }
// document.querySelector("generate")
// generateBtn.addEventListener("click", writePassword);

// assignment code here


var characterAmountRange = document.getElementById ("characterAmountRange")
var characterAmountNumber = document.getElementById ("characterAmountNumber")
var includeUppercaseElement = document.getElementById ("includeUppercase")
var includeNumbersElement = document.getElementById ("includeNumbers")
var includeSymbolsElement = document.getElementById ("includeSymbols")
var form = document.getElementById("password")
var password = document.getElementById("password")


characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)


form.addEventListener("submit", e => {
    e.preventDefault()
    var characterAmount = characterAmountnumber.value
    var includeUpperCase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    password.innerText = password

});

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
};

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
    var charCodes = lowerCaseCharCodes
    if (includeUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(numberCarCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
    
    var passwordCharacters = []
    for (var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join("")
};

function arrayFromLowToHigh(low, high) {
    var array = [];
    for (var i = low; i <= high; i++) {
        array.push(i)
    }
    return array;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var lowerCaseCharCodes = arrayFromLowToHigh(97,122)
    var uppercaseCharCodes = arrayFromLowToHigh(65, 90)
    var numberCarCharCodes = arrayFromLowToHigh(48, 57)
    var symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
        arrayFromLowToHigh(58, 64)
    ).concat(
        arrayFromLowToHigh(91, 96)
    ).concat(
        arrayFromLowToHigh(123, 126)
    )

    console.log("here")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
