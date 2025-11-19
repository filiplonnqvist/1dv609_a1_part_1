
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'

// FINISHED
// import { Password } from "../src/BugNeverContainsNumbers"
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugToShortPassword'

import { Password } from '../src/Correct'


describe('Password class, test suite', () => {
    const emptyPassword = ''

    test('Constructor should throw an error if password is too short', () => {
        function tooShortPassword() {
            const testPassword = 'Test1234567' // Testing limit of 11 characters
            new Password(testPassword)
        }

        function veryShortPassword() {
            const testPassword = 'Test1'
            new Password(testPassword)
        }

        expect(tooShortPassword).toThrow()
        expect(veryShortPassword).toThrow()

    })

    test('Constructor should throw an error if password does not contain numbers', () => {
        function passwordWithoutNumbers() {
            const testPassword = 'TestPasswordWithoutNumbers'
            new Password(testPassword)
        }
        expect(passwordWithoutNumbers).toThrow()
    })

    test('Constructor should not return an error when password is correct', () => {
        const testPassword = 'Test12345678'

        function correctPasswordDoesNotThrowError() {
            new Password(testPassword)
        }
        expect(correctPasswordDoesNotThrowError).not.toThrow()
    })
})