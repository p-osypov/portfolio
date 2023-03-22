const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[jt]s?(x)',
    '!**/*.d.ts',
    '!src/app/test/**/*.[jt]s?(x)',
  ],
  coverageDirectory: '<rootDir>/src/app/test/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/app/test/'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src'
  }),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/app/test/config/jest-setup.js'],
  testEnvironmentOptions: {
    url: 'http://localhost'
  },

  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  transform: {
    '^.+\\.tsx$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(uuid))'],
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
