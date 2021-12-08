module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/services/*',
    '**/helpers/*'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['index\\.js$'],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'node'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/**/*.test.js'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
