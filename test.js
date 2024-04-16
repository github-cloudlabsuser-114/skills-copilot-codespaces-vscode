class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
    }

    subtract(a, b) {
        this.result = a - b;
    }

    multiply(a, b) {
        this.result = a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            this.result = a / b;
        } else {
            console.log('Error: Division by zero is not allowed');
        }
    }

    getResult() {
        return this.result;
    }
}

const calculator = new Calculator();

calculator.add(5, 3);
console.log(calculator.getResult()); // Outputs: 8

calculator.subtract(5, 3);
console.log(calculator.getResult()); // Outputs: 2

calculator.multiply(5, 3);
console.log(calculator.getResult()); // Outputs: 15

calculator.divide(5, 3);
console.log(calculator.getResult()); // Outputs: 1.6666666666666667

calculator.divide(5, 0); // Outputs: Error: Division by zero is not allowed