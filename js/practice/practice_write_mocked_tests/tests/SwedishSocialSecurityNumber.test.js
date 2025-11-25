import { beforeEach, expect, jest } from '@jest/globals';

// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';

// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    const emptyString = ''

    let mockHelper

    beforeEach(() => {
        mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
    })

    test('Constructor should throw an error when social security number is too short', () => {
        mockHelper.isCorrectLength.mockReturnValue(false)

        expect(() => new SwedishSocialSecurityNumber(emptyString, mockHelper)).toThrow('To short, must be 11 characters')
        expect(mockHelper.isCorrectLength).toHaveBeenCalled()
    })

    test('Constructor should throw an error when social security number format is wrong', () => {
        mockHelper.isCorrectFormat.mockReturnValue(false)
    
        expect(() => new SwedishSocialSecurityNumber(emptyString, mockHelper)).toThrow('Incorrect format, must be: YYMMDD-XXXX')
        expect(mockHelper.isCorrectLength).toHaveBeenCalledWith(emptyString)
    })

    test('getYear() should return the the first two numbers in the social security number', () => {
        mockHelper.isCorrectLength.mockReturnValue(true)

        const input = '770022-3322'
        const year = new SwedishSocialSecurityNumber(input, mockHelper)
        expect(year.getYear()).toBe('77')
    })

    test('Constructor should throw an error when social security number has an invalid month', () => {
        mockHelper.isValidMonth.mockReturnValue(false)

        input = '770022-3322'
        expect(() => new SwedishSocialSecurityNumber(input, mockHelper)).toThrow('Invalid month in SSN')
        expect(mockHelper.isValidMonth).toHaveBeenCalledWith('00')
    })

    test('Constructor should throw an error when social security number has an invalid day', () => {
        mockHelper.isValidDay.mockReturnValue(false)

        expect(() => new SwedishSocialSecurityNumber(emptyString, mockHelper)).toThrow('Invalid month in SSN')
        expect(mockHelper.isValidDay).toHaveBeenCalledWith(emptyString)
    })

    test('Constructor should trim the social security number input', () => {
        mockHelper.isCorrectLength.mockReturnValue(true)

        const inputWithWhitespace = ' 770022-3322'
        const serialNumber = new SwedishSocialSecurityNumber(inputWithWhitespace, mockHelper)
        expect(serialNumber.getSerialNumber()).toBe('3322')
    })

    test('Constructor should throw an error when social security number is invalid accordign to the Luhns algorithm', () => {
        mockHelper.luhnisCorrect.mockReturnValue(false)

        const input = '770022-3321'
        expect(() => new SwedishSocialSecurityNumber(input, mockHelper)).toThrow("Invalid SSN according to Luhn's algorithm")
        expect(mockHelper.luhnisCorrect).toHaveBeenCalled()
    })
});