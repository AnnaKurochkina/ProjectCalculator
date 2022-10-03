
class Calculator 
{
    infoValue = null;
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    operator = null;
    appendDecimal = () => {
        if (!this.displayValue.includes('.')) {
            this.displayValue += '.';
        }
    };
    appendDigit = (newDigit) => {
        if (this.displayValue == '0' || this.waitingForSecondOperand) {
            this.displayValue = newDigit;
        } else {
            this.displayValue += newDigit;
        }
        this.waitingForSecondOperand = false;
    };
    removeDigit = () => {
        if (this.displayValue !== '0') {
            if (this.displayValue.length > 1) {
                this.displayValue = this.displayValue.substring(0, this.displayValue.length - 1);
            } else {
                this.displayValue = '0';
            }
        }
    };
    plusMinus = () => {
        if (this.displayValue !== '0') {
            if (this.displayValue.startsWith('-')) {
                this.displayValue = this.displayValue.substring(1);
            } else {
                this.displayValue = `-${this.displayValue}`;
            }
        }
    };
    reset = () => {
        this.infoValue = null;
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    };
    equals = () => {
        if (this.waitingForSecondOperand == false && this.firstOperand != null) {
            const secondOperand = Number.parseFloat(this.displayValue);
            let result;
            switch(this.operator) {
                case '+':
                    result = this.firstOperand + secondOperand;
                    break;
                case '-':
                    result = this.firstOperand - secondOperand;
                    break;
                case 'x':
                    result = this.firstOperand * secondOperand;
                    break;
                case '÷':
                    result = this.firstOperand / secondOperand;
                    break;
            }
            this.infoValue += secondOperand + '=';
            this.displayValue = result;
            this.firstOperand = result;
            this.waitingForSecondOperand = true;
            this.operator = null;
        }
    };
    setOperator = (newOperator) => {
        if (this.operator != null) {
            this.equals();
        }
        
        this.infoValue = `${this.displayValue}${newOperator}`;
        this.firstOperand = Number.parseFloat(this.displayValue);
        this.waitingForSecondOperand = true;
        this.operator = newOperator;
    };
}

const calculator = new Calculator();

const updateDisplay = () => {
    const info = document.querySelector('#infoValue');
    const display = document.querySelector('#displayValue');

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

const plusMinusClicked = (event) => {
    calculator.plusMinus();
    updateDisplay();
}; 

const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit');
const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const plusMinusButton = document.querySelector('.plusMinus');
const equalsButton = document.querySelector('.equals');

operatorButtons.forEach(button => button.addEventListener('click', operatorClicked));
digitButtons.forEach(button => button.addEventListener('click', digitClicked));
decimalButton.addEventListener('click', decimalClicked);
clearButton.addEventListener('click', clearClicked);
deleteButton.addEventListener('click', deleteClicked);
plusMinusButton.addEventListener('click', plusMinusClicked);
equalsButton.addEventListener('click', equalsClicked);

document.addEventListener('keydown', (event) => {
    const keyAsInt = parseInt(event.key);
    if (isNaN(keyAsInt)) {
        const operatorButtonsArray = Array.from(operatorButtons);
        const operatorButton = operatorButtonsArray.find(button => {
            switch(button.dataset.operator) {
                case 'x':
                    return event.key == '*';
                case '÷':
                    return event.key == '/';
                default:
                    return event.key == button.dataset.operator;
            }
        });
        if (operatorButton) {
            operatorButton.click();
        } else {
            switch(event.key) {
                case 'Enter':
                case '=':
                    equalsButton.click();
                    break;
                case 'Backspace':
                    deleteButton.click();
                    break;
                case 'Delete':
                    clearButton.click();
                    break;
                case '.':
                    decimalButton.click();
                    break;
                default:
                    break;
            }
        }
    } else {
        const digitButtonsArray = Array.from(digitButtons);
        const digitButton = digitButtonsArray.find(button => button.dataset.digit == event.key);
        digitButton.click();
    }
});
