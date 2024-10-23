module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverage: true,
};