
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

const updateDisplay = () => {
    const display = document.querySelector(".grid-item__display");
    display.value = calculator.displayValue;
}

updateDisplay();

