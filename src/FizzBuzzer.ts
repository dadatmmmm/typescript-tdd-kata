export default class FizzBuzzer {

    public static MAX_VALUE = 100;

    constructor() {
    }

    static result(num : number) {
        return 0;
    }

    public getValue(val: number):number|string {

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

    public createFizzArray(arraySize: number): (number|string)[]|Error {

        if (arraySize > FizzBuzzer.MAX_VALUE) {
            throw new Error('Cannot create array as size is too big. Please send another size')
        }

        const tab:(number|string)[] = new Array();

        for(let i=1; i<=arraySize; i++) {
            
            let val;
            val = this.getValue(i);
            tab.push(val);
        }

        return tab;
    }
} 