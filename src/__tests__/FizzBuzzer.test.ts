import FizzBuzzer from "../FizzBuzzer";

const fizzBuzz = new FizzBuzzer();

describe('FizzBuzzer tests', () => {
    it('should return 0 if passed 0', () => {
        expect(FizzBuzzer.result(0)).toEqual(0)
    });

    it("should create an instance that isn't null", () => {
        expect(fizzBuzz).not.toBeNull();
    })

    it('should return number 7', () => {
        expect(fizzBuzz.getValue(7)).toEqual(7);
    })

    it('should return Fizz', () => {
        expect(fizzBuzz.getValue(6)).toEqual("Fizz");
    })

    it('should return Buzz', () => {
        expect(fizzBuzz.getValue(25)).toEqual("Buzz");
    })

    it('should return FizzBuzz', () => {
        expect(fizzBuzz.getValue(30)).toEqual("FizzBuzz");
    })

    it('should throw error if value sent is bigger than max', () => {
        expect(()=> {
            fizzBuzz.getValue(FizzBuzzer.MAX_VALUE+1);
        }).toThrowError('Invalid input');
    })

    it('should return an array', () => {
        const results = fizzBuzz.createFizzArray(50);
        expect(Array.isArray(results)).toBeTruthy();
    })

    it('should throw error if array size is bigger than max', () => {
        expect(() => {
            fizzBuzz.createFizzArray(FizzBuzzer.MAX_VALUE+1); 
        }).toThrowError('Cannot create array as size is too big. Please send another size');
    })
});