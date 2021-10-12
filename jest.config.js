module.exports = {
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.(vue)$': 'vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$', 'src/runtimeEnv.ts'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/'],
  cacheDirectory: '<rootDir>/tmp/cache/jest',
  timers: 'fake',
  testEnvironment: 'jsdom',
};
