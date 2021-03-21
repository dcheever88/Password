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

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function onClick(e) {
    var characterAmountRange = document.getElementById ("characterAmountRange")
var characterAmountNumber = document.getElementById ("characterAmountNumber")
var includeUppercaseElement = document.getElementById ("upperCaseCharacters")
var includeNumbersElement = document.getElementById ("numbersCharacters")
var includeSymbolsElement = document.getElementById ("symbolsCharacters")
// var form = document.getElementById("password")
var passwordText = document.getElementById("password")

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

    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeUpperCase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passwordText.innerText = password
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", onClick);

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
};

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
    console.log(characterAmount + includeUpperCase + includeNumbers + includeSymbols)

    var charCodes = lowerCaseCharCodes
    if (includeUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(numberCarCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
    
    var passwordCharacters = []
    for (var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    console.log(passwordCharacters)
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
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
