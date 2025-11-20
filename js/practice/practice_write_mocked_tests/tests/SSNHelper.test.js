import { SSNHelper } from '../src/correct/SSNHelper';

// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe('SSNHelpe Tests', () => {
    let helper
    beforeEach(() => {
        helper = new SSNHelper()
    })

    // test('isCorrectLength() should return true when social security number has 11 characters', () => {
    //     const stringInput = '123456-7890'
    //     const isCorrectLength = helper.isCorrectLength(stringInput)

    //     expect(isCorrectLength).toBe(true)
    // });

    test('isCorrectLength() should return false when social security number has more than 11 characters', () => {
        const stringInput = '12345678-9012'
        const isIncorrectLength = helper.isCorrectLength(stringInput)

        expect(isIncorrectLength).toBe(false)
    })

    // test('isCorrectLength() should return false when social security number has less than 11 characters', () => {
    //     const stringInput = '12345-901'
    //     const isIncorrectLength = helper.isCorrectLength(stringInput)

    //     expect(isIncorrectLength).toBe(false)
    // })

    test('isCorrectFormat() should return false when social security number has the incorrect format', () => {
        const stringInput = '123456-XXXX'
        const isIncorrectFormat = helper.isCorrectFormat(stringInput)

        expect(isIncorrectFormat).toBe(false)
    })

    // test('isValidMonth() should return true when month is between 1 and 12', () => {
    //     const validMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

    //     for (const month of validMonths) {
    //         expect(() => helper.isValidMonth(month))
    //     }
    // })

    // test('isValidMonth() should return false when month is less than 1', () => {
    //     const stringInput = '00'
    //     const isIncorrectMonth = helper.isValidMonth(stringInput)

    //     expect(isIncorrectMonth).toBe(false)
    // })

    test('isValidMonth() should return false when month is more than than 12', () => {
        const stringInput = '13'
        const isIncorrectMonth = helper.isValidMonth(stringInput)

        expect(isIncorrectMonth).toBe(false)
    })

    test('isValidDay() should return true when day is 31', () => {
        const stringInput = '31'
        const isCorrectDay = helper.isValidDay(stringInput)

        expect(isCorrectDay).toBe(true)
    })

    test('luhnisCorrect() should return true when social security number pass the Luhn check', () => {
        const stringInput = '770722-3322'
        const isCorrectLuhn = helper.luhnisCorrect(stringInput)

        expect(isCorrectLuhn).toBe(true)
    })


});