
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    updateDisplayValue: function(value) {
        if (this.displayValue == '0') {
            this.displayValue = value;
        } else {
            this.displayValue += value;
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
        firstOperand + displayValue;
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
    
    if (!calculator.displayValue.includes(".")) {
        calculator.displayValue += '.';
    } else {
        calculator.displayValue;
    }
    updateDisplay();
};

const clearAllClicked = (event) => {
    calculator.reset();
    updateDisplay();
};

const equalsClicked = (event) => {
    alert("equals");
    /* calculator.compute(); */
    updateDisplay();
}

const deleteLastClicked = (event) => {
    alert("del");
    // if (calculator.displayValue.includes("delete")) {
    //     alert("del");
    // }
    // updateDisplay(); 
    // calculator.displayValue.split("").pop(); 
 } 

const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit');

const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');

/* const deleteLastButton = document.querySelector('.delete'); */

const equalsButton = document.querySelector('.equals');


operatorButtons.forEach(button => button.addEventListener('click', operatorClicked));
digitButtons.forEach(button => button.addEventListener('click', digitClicked));

decimalButton.addEventListener('click', decimalClicked);
clearButton.addEventListener('click', clearAllClicked);

/* deleteLastButton.addEventListener('click', deleteLastClicked); */



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
