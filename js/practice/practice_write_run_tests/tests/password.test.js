
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugWrongHashingAlgorithm'

// FINISHED
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from "../src/BugNeverContainsNumbers"
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugToShortPassword'

import { Password } from '../src/Correct'


describe('Password class, test suite', () => {

    test('Constructor should throw an error if password is too short', () => {
        const tooShortPasswords = [
            'Test1234567',
            'Test1'
        ]

        for (const password of tooShortPasswords) {
            expect(() => new Password(password)).toThrow('Too short password')
        }
    })

    test('Constructor should throw an error if password does not contain numbers', () => {
        function passwordWithoutNumbers() {
            const testPassword = 'TestPasswordWithoutNumbers'
            new Password(testPassword)
        }

        expect(passwordWithoutNumbers).toThrow('No number found')
    })

    test('Constructor should not return an error when password is correct', () => {
        const testPassword = 'Test12345678'

        function correctPasswordShouldNotThrowError() {
            new Password(testPassword)
        }

        expect(correctPasswordShouldNotThrowError).not.toThrow('No number found')
    })

    test('Password is not the same', () => {
        const firstPassword = new Password('FirstPassword12345')
        const secondPassword = new Password(' SecondPassword12345 ')

        const arePasswordsTheSame = firstPassword.isPasswordSame(secondPassword)

        expect(arePasswordsTheSame).toBe(false)

    })

    test('Constructor should trim whitespaces from password', () => {
        const passwordWithoutWhitespace = new Password('Test12345678')
        const passwordWithWhitespace = new Password(' Test12345678 ')

        const arePasswordsTrimmed = passwordWithoutWhitespace.isPasswordSame(passwordWithWhitespace)

        expect(arePasswordsTrimmed).toBe(true)
    })
})