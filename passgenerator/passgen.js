// RANDOM PASS GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvxwyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%¨&*()_+";

    let allowedChars = "";
    let password = "";
    
    allowedChars += allowLower.checked ? lowercaseChars : "";
    allowedChars += allowUpper.checked ? uppercaseChars : "";
    allowedChars += allowNumbers.checked ? numberChars : "";
    allowedChars += allowSymbols.checked ? symbolChars : "";

    if(length <= 0){
        return `(password length deve ser ao menos 1)`;
    }
    if(allowedChars.length === 0){
        return `(ao menos 1 set de caracteres deve ser selecionado)`
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

const passwordLength = document.getElementById("numOfChars");
// checkboxes
const allowLower = document.getElementById("allowLower");
const allowUpper = document.getElementById("allowUpper");
const allowNumbers = document.getElementById("allowNumbers");
const allowSymbols = document.getElementById("allowSymbols");
mySubmit = document.getElementById("mySubmit");
result = document.getElementById("result");

mySubmit.onclick = function(){
    const password = generatePassword(passwordLength.value, 
        allowLower, allowUpper, allowNumbers, allowSymbols);

    result.textContent = `${password}`;
}
