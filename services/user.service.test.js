const UserService = require('./user.service');

jest.mock('../models/user.model');
const mockedUserModel = require('../models/user.model');

describe('user service tests', () => {
    describe('function: getUsers', () => {
        describe('when function is invoked', () => {
            it('should return results', () => {
                // Arrange 
                const mockResponse = [{ firstname: 'dummy first name'}];
                const findArgs = [{is_default: true}, {_id: 0, firstname: 1}];
                mockedUserModel.find.mockImplementation(async () => {
                    return mockResponse;
                });

                // Act
                const response = UserService.getUsers();

                // Assert
                expect(mockedUserModel.find.mock.calls.length).toBe(1);
                expect(mockedUserModel.find).toHaveBeenCalledWith(findArgs[0], findArgs[1]);
                return expect(response).resolves.toBe(mockResponse);
            });
        });
    });
});