module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'tsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.tsx'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  coverageDirectory: '<rootDir>/coverage',
};
