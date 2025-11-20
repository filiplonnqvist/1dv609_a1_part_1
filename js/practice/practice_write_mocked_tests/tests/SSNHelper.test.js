// import { SSNHelper } from '../src/correct/SSNHelper'; 

// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe('SSNHelpe Tests', () => {
    let helper
    beforeEach(() => {
        helper = new SSNHelper()
    })

    test('isCorrectLength() should return true when social security number has 11 characters', () => {
        const stringInput = '123456-7890'
        const isCorrectLength = helper.isCorrectLength(stringInput)

        expect(isCorrectLength).toBe(true)
    });

    test('isCorrectLength() should return false when social security number has more than 11 characters', () => {
        const stringInput = '12345678-9012'
        const isIncorrectLength = helper.isCorrectLength(stringInput)

        expect(isIncorrectLength).toBe(false)
    })

    test('isCorrectFormat() should return false when social security number has the incorrect format', () => {
        const stringInput = '123456-XXXX'
        const isIncorrectFormat = helper.isCorrectFormat(stringInput)

        expect(isIncorrectFormat).toBe(false)
    })

});