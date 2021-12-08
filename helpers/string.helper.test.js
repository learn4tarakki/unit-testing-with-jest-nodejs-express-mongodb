const stringHelper = require('./string.helper');

describe('string helper tests', () => {
    describe('function: capitalizeFirstLetter', () => {
        describe('when function is invoked with a string having lowercase first letter', () => {
            it('should return string with first letter capitalized', () => {            
                // Arrange
                const inputString = "sample string";
                const expected = "Sample string";

                // Act
                const response = stringHelper.capitalizeFirstLetter(inputString);

                // Assert
                expect(response).toEqual(expected);
            });
        });
    });
});