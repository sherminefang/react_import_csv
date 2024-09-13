import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    ".(ts|tsx)": ["babel-jest", {config: "babel.config.js" } ],
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/app",
    "/coverage",
    "package.json",
    "package-lock.json",
    "jest.config.ts",
    "next.config.mjs",
    "next-env.d.ts"
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export { };
module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ['src/test/*.{jsx}'],
//   coverageDirectory: 'coverage',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   // preset: 'ts-jest',
//   // testEnvironment: 'jsdom',
//   // transform: {
//   //   '^.+\\.tsx?$': 'babel-jest',
//   // },
//   // // testEnvironment: "node",
//   //  roots: ['<rootDir>/src/test'],
//   // transform: {
//   //   "^.+.(tsx|ts|jsx|js)?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
//   // },
//   // testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
//   // //transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
//   // //transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\]'],
//   // // "transformIgnorePatterns": [
//   // //    "node_modules/(?!(jest-runtime)/)"
//   // //   ], 
//   // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };