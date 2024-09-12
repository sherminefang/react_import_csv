/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  roots: ['<rootDir>/test'],
  transform: {
    "^.+.(tsx|ts|js|jsx)?$": ["ts-jest", {tsconfig: "tsconfig.jest.json"}],
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};