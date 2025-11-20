
// Select one of the Password versions to test

import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from "../src/BugNeverContainsNumbers"
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugToShortPassword'

// import { Password } from '../src/Correct'
// import { Password } from '../src/BugSelf-compare'


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
        function createPasswordWithoutNumbers() {
            const input = 'TestPasswordWithoutNumbers'
            new Password(input)
        }

        expect(createPasswordWithoutNumbers).toThrow('No number found')
    })

    test('Constructor should not throw an error for valid password', () => {
        const input = 'Test12345678'

        function correctPasswordShouldNotThrowError() {
            new Password(input)
        }

        expect(correctPasswordShouldNotThrowError).not.toThrow('No number found')
    })

    test('isPasswordSame() should return false for different passwords', () => {
        const firstPassword = new Password('FirstPassword12345')
        const secondPassword = new Password('SecondPassword12345')

        const arePasswordsTheSame = firstPassword.isPasswordSame(secondPassword)

        expect(arePasswordsTheSame).toBe(false)

    })

    test('isPasswordSame() should throw an error if password is not an instance', () => {
        function incorrectInputShouldThrowError() {
            const firstPassword = new Password('FirstPassword12345')
            const secondPassword = 'SecondPassword12345'
            firstPassword.isPasswordSame(secondPassword)
        }

        expect(incorrectInputShouldThrowError).toThrow('Invalid argument')

    })

    test('Constructor should trim whitespaces from password', () => {
        const passwordWithoutWhitespace = new Password('Test12345678')
        const passwordWithWhitespace = new Password(' Test12345678')

        const arePasswordsTrimmed = passwordWithoutWhitespace.isPasswordSame(passwordWithWhitespace)

        expect(arePasswordsTrimmed).toBe(true)
    })

    test('Constructor should apply the correct hashing algorithm', () => {
        function hashPassword(input) {
            let hash = 7
            for (let i = 0; i < input.length; i++) {
                hash = hash * 31 + input.charCodeAt(i)
            }
            return hash
        }

        const input = 'Test12345678'
        const expectedHash = hashPassword(input)
        const password = new Password(input)
        const actualHash = password.getPasswordHash()

        expect(expectedHash === actualHash).toBe(true)
    })
})