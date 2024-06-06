const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");



let currentInput = "";


function appendValue(number){
    currentInput+= number;
    display.innerText = currentInput;
}

function clearValue(){
    currentInput= "";
    display.innerText = currentInput;
}

function calculate(){
    currentInput= eval(currentInput).toString();
    display.innerText = currentInput;
}

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const value = button.innerText;
        
        switch(value) {
            case "C":
                clearValue(value);
                break;
            case "=":
                calculate(value);
                break;
            default:
                appendValue(value);
                break;
        }
    })
});



