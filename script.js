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
    e.preventDefault()

    var characterAmountNumber = document.getElementById ("characterAmountNumber")
    var includeUppercaseElement = document.getElementById ("upperCaseCharacters")
    var includeNumbersElement = document.getElementById ("numbersCharacters")
    var includeSymbolsElement = document.getElementById ("symbolsCharacters")
    var passwordText = document.getElementById("password")
    var cardBody = document.getElementById("card-body")
    cardBody.style.display = "block";

    var characterAmount = characterAmountNumber.value
    var includeUpperCase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passwordText.innerText = password

}

function toggle(e) {
    e.preventDefault()
    var inputs = document.getElementById ("inputs")
    var generate = document.getElementById ("generate")
    var hideshow = document.getElementById ("hideshow")
        inputs.style.display = "block";
        generate.style.display = "block";
        hideshow.style.display = "none";
        
    
    }

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", onClick);
var hideShow = document.querySelector("#hideshow");
hideShow.addEventListener("click", toggle);


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