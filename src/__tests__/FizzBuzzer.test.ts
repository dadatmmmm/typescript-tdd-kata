import FizzBuzzer from "../FizzBuzzer";

const fizzBuzz = new FizzBuzzer();

describe('FizzBuzzer tests', () => {
    it('should return 0 if passed 0', () => {
        expect(FizzBuzzer.result(0)).toEqual(0)
    });

    it('should create an instance with array', () => {
        expect(fizzBuzz).not.toBeNull();
    })

    it('should return number', () => {
        expect(fizzBuzz.getResult(7)).toEqual(7);
    })

    it('should return fizz', () => {
        expect(fizzBuzz.getResult(6)).toEqual("Fizz");
    })

    it('should return buzz', () => {
        expect(fizzBuzz.getResult(25)).toEqual("Buzz");
    })

    it('should return fizzbuzz', () => {
        expect(fizzBuzz.getResult(30)).toEqual("FizzBuzz");
    })

    it('should throw error', () => {
        expect(()=> {
            fizzBuzz.getResult(FizzBuzzer.MAX_VALUE+1);
        }).toThrowError('Invalid input');
    })
});