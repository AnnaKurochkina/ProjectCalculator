
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    updateDisplayValue: (value) => {
        if (calculator.displayValue == '0') {
            calculator.displayValue = value;
        } else {
            calculator.displayValue += value;
        }
    }
};

const updateDisplay = () => {
    const display = document.querySelector(".grid-item__display");
    display.value = calculator.displayValue;
};

updateDisplay();

const operatorClicked = (event) => {
    if (event.target.classList.contains('add')) {
        alert("add");
    } else if (event.target.classList.contains('subtract')) {
        alert("subtract");
    } else if (event.target.classList.contains('multiply')) {
        alert("muitiply");
    } else if (event.target.classList.contains('divide')) {
        alert("divide");
    } else {
        throw "not supported"
    };
};

const digitClicked = (event) => {
    calculator.updateDisplayValue(event.target.dataset.digit);
    updateDisplay();
};

const decimalClicked = (event) => {
    
};

const clearClicked = (event) => {
    
};

const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit');

operatorButtons.forEach(button => button.addEventListener('click', operatorClicked));
digitButtons.forEach(button => button.addEventListener('click', digitClicked));


