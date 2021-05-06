module.exports = {
  moduleFileExtensions: ['js', 'ts', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    '^.+\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testURL: 'http://localhost/',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
};
