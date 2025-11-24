import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';
import { beforeEach, expect, jest } from '@jest/globals';



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
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

        function createSSN() {
            new SwedishSocialSecurityNumber('770722-3322 ', mockHelper)
        }

        expect(createSSN).toThrow('To short, must be 11 characters')
        expect(mockHelper.isCorrectLength).toHaveBeenCalled()
    })

    test('Constructor should throw an error when social security number has an incorrect format', () => {
        mockHelper.isCorrectFormat.mockReturnValue(false)

        function createSSN() {
            new SwedishSocialSecurityNumber('770722-XXXX ', mockHelper)
        }

        expect(createSSN).toThrow('Incorrect format, must be: YYMMDD-XXXX')
        expect(mockHelper.isCorrectFormat).toHaveBeenCalled()
    })

    test('Constructor should throw an error when social security number has an invalid month', () => {
        mockHelper.isValidMonth.mockReturnValue(false)

        function createSSN() {
            new SwedishSocialSecurityNumber('770022-3322', mockHelper)
        }

        expect(createSSN).toThrow('Invalid month in SSN')
        expect(mockHelper.isValidMonth).toHaveBeenCalledWith('00')
    })

});