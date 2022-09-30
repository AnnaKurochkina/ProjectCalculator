
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    appendDecimal: function() {
        if (!this.displayValue.includes(".")) {
            this.displayValue += '.';
        }
    },
    appendDigit: function(value) {
        if (this.displayValue == '0') {
            this.displayValue = value;
        } else {
            this.displayValue += value;
        }
    },
    removeDigit: function() {
        if (this.displayValue !== '0') {
            if (this.displayValue.length > 1) {
                this.displayValue = this.displayValue.substr(0, this.displayValue.length - 1);
            } else {
                this.displayValue = '0';
            }
        }
    },
    reset: function() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
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
    calculator.appendDigit(event.target.dataset.digit);
    updateDisplay();
};

const decimalClicked = (event) => {
    calculator.appendDecimal();
    updateDisplay();
};

const clearClicked = (event) => {
    calculator.reset();
    updateDisplay();
};

const equalsClicked = (event) => {
    alert("equals");
    /* calculator.compute(); */
    updateDisplay();
};

const deleteClicked = (event) => {
    calculator.removeDigit();
    updateDisplay();
}; 

const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit');
const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');

operatorButtons.forEach(button => button.addEventListener('click', operatorClicked));
digitButtons.forEach(button => button.addEventListener('click', digitClicked));
decimalButton.addEventListener('click', decimalClicked);
clearButton.addEventListener('click', clearClicked);
deleteButton.addEventListener('click', deleteClicked);
equalsButton.addEventListener('click', equalsClicked);

const compute = (firstOperand, displayValue, operator) => {
    
    switch(operator) {
        case "add":
            result = firstOperand + displayValue;
            break;
            case "subtract":
            result = firstOperand - displayValue;
            break;
            case "multiply":
            result = firstOperand * displayValue;
            break;
            case "divide":
            result = firstOperand / displayValue;
            break;
    }
}
