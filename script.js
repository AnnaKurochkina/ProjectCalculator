
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
    if (event.target.classList.contains('one')) {
        calculator.updateDisplayValue('1');
    } else if (event.target.classList.contains('two')) {
        calculator.updateDisplayValue('2');
    } else if (event.target.classList.contains('three')) {
        calculator.updateDisplayValue('3');
    } else if (event.target.classList.contains('four')) {
        calculator.updateDisplayValue('4');
    } else if (event.target.classList.contains('five')) {
        calculator.updateDisplayValue('5');
    } else if (event.target.classList.contains('six')) {
        calculator.updateDisplayValue('6');
    } else if (event.target.classList.contains('seven')) {
        calculator.updateDisplayValue('7');
    } else if (event.target.classList.contains('eight')) {
        calculator.updateDisplayValue('8');
    } else if (event.target.classList.contains('nine')) {
        calculator.updateDisplayValue('9');
    } else if (event.target.classList.contains('zero')) {
        calculator.updateDisplayValue('0');
    } else {
        throw "not supported"
    }
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


