class Calculator {

    finish = false;

    constructor() {
        this.reset();
        this.watchBtn();
    }

    watchBtn() {
        document.querySelectorAll('#calculator button').forEach( (btnItem) => {
            btnItem.addEventListener('click', (event) => {
                const target = event.target;
                // ist className == '' oder className == 'decimal' 
                // dann wandle die Eingabe in einem String um und Addiere in zu currentInput
                switch(target.className) {
                    case '':
                    case 'decimal':
                        this.currentInput += target.value.toString();
                        document.getElementById('calculator-screen').value = this.currentInput;
                        break;
                    case 'operator':
                        if (this.operator === '') {
                            this.operator = target.value;
                        } else {
                            this.tmpOperator = target.value;
                            this.calc();
                        }

                        if (this.sum === 0) {
                            this.tempNumber = this.currentInput;
                        }
                        this.currentInput = '';
                        break;
                    case 'equalSign':
                        this.finish = true;
                        this.calc();
                        break;
                    case 'allClear':
                        this.reset();
                        document.getElementById('calculator-screen').value = this.sum;
                        break;
                }
            });
        });
    }

    calc() {
        switch(this.operator) {
            case '+':
                this.add();
                break;
            case '-':
                this.subtraction();
                break;
            case '*':
                this.multiplication();
                break;
            case '/':
                this.division();
                break;
        }
        if (this.finish) {
            this.reset();
            this.finish = false;
        } else {
            this.operator = this.tmpOperator;
        }
    }

    add() {
        this.sum = parseFloat(this.tempNumber) + parseFloat(this.currentInput);
        this.total();
    }

    subtraction() {
        this.sum = parseFloat(this.tempNumber) - parseFloat(this.currentInput);
        this.total();
    }

    multiplication() {
        this.sum = parseFloat(this.tempNumber) * parseFloat(this.currentInput);
        this.total();
    }

    division() {
        this.sum = parseFloat(this.tempNumber) / parseFloat(this.currentInput);
        this.total();
    }

    total() {
        this.tempNumber = this.sum;
        document.getElementById('calculator-screen').value = this.sum;
    }

    reset() {
        this.currentInput = '';
        this.tempNumber = '';
        this.operator = '';
        this.tmpOperator = '';
        this.sum = 0;
    }
}

const calculator = new Calculator();


