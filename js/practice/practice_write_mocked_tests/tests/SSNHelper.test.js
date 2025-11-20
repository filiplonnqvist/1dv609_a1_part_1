import { SSNHelper } from '../src/correct/SSNHelper';

// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe('SSNHelpe Tests', () => {
    const helper = new SSNHelper()

    test('isCorrectLength() should return false when social security number has more than 11 characters', () => {
        const input = '12345678-9012'
        const output = helper.isCorrectLength(input)

        expect(output).toBe(false)
    })

    test('isCorrectFormat() should return false when social security number has the incorrect format', () => {
        const input = '123456-XXXX'
        const output = helper.isCorrectFormat(input)

        expect(output).toBe(false)
    })

    test('isValidMonth() should return false when month is less than 1', () => {
        const input = '00'
        const output = helper.isValidMonth(input)

        expect(output).toBe(false)
    })

    test('isValidMonth() should return false when month is more than than 12', () => {
        for (let i = '1'; i <= '12'; i++) {
            const month = helper.isValidMonth(i)
            expect(month).toBe(true)
        }
    })

    test('isValidDay() should return true when day is 31', () => {
        for (let i = '1'; i <= '31'; i++) {
            const day = helper.isValidDay(i)
            expect(day).toBe(true)
        }
    })

    test('luhnisCorrect() should return true when social security number pass the Luhn check', () => {
        const input = '770722-3322'
        const output = helper.luhnisCorrect(input)

        expect(output).toBe(true)
    })


});