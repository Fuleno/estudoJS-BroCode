// CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value == "Error" ? display.value = `${input}` : display.value += input;
    // display.value += input; // código imprático do Bro Code, solução melhor acima
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}