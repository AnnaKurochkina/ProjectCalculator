
const calculator = {
    infoValue: null,
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
        if (this.displayValue == '0' || this.waitingForSecondOperand) {
            this.displayValue = value;
        } else {
            this.displayValue += value;
        }
        this.waitingForSecondOperand = false;
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
        this.infoValue = null;
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    },
    equals: function() {
        if (this.waitingForSecondOperand == false && this.firstOperand != null) {
            const secondOperand = Number.parseFloat(this.displayValue);
            let result;
            switch(this.operator) {
                case "+":
                    result = this.firstOperand + secondOperand;
                    break;
                case "-":
                    result = this.firstOperand - secondOperand;
                    break;
                case "x":
                    result = this.firstOperand * secondOperand;
                    break;
                case "÷":
                    result = this.firstOperand / secondOperand;
                    break;
            }
            this.infoValue += secondOperand + '=';
            this.displayValue = result;
            this.firstOperand = result;
            this.waitingForSecondOperand = true;
            this.operator = null;
        }
    },
    setOperator: function(operator) {
        if (this.operator != null) {
            this.equals();
        }
        
        this.infoValue = `${this.displayValue}${operator}`;
        this.firstOperand = Number.parseFloat(this.displayValue);
        this.waitingForSecondOperand = true;
        this.operator = operator;
    }
};

const updateDisplay = () => {
    const info = document.querySelector("#infoValue");
    const display = document.querySelector("#displayValue");

    info.value = calculator.infoValue;
    display.value = calculator.displayValue;
};

updateDisplay();

const operatorClicked = (event) => {
    calculator.setOperator(event.target.dataset.operator);
    updateDisplay();
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
    calculator.equals();
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
