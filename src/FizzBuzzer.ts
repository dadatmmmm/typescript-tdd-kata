export default class FizzBuzzer {

    public static MAX_VALUE = 100;

    constructor() {
    }

    static result(num : number) {
        return 0;
    }

    public getResult(val: number):number|string|Error {

        if (val<1 || val>FizzBuzzer.MAX_VALUE) {
            throw new Error('Invalid input');
        }

        if ((val % 3) !== 0 && (val % 5) !== 0) {
            return val;
        }

        if ((val % 3) === 0 && (val % 5) !== 0) {
            return "Fizz";
        }

        if ((val % 3) !== 0 && (val % 5) === 0) {
            return "Buzz";
        }

        return "FizzBuzz";  
    }
} 