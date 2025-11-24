import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'; 



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability

    test('Constructor should throw an error when social security number is too short', () => {
        const mockHelper = {
            isCorrectLength: () => false
        }

        function createSSN() {
            new SwedishSocialSecurityNumber('800231-1234', mockHelper)
        }

        expect(createSSN).toThrow('To short, must be 11 characters')
    })
});