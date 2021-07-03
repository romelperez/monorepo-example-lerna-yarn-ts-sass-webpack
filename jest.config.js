const glob = require('glob');

const packagesNames = glob
  .sync('./packages/*')
  .map(path => path.replace(/^.+packages\//, ''));

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  testURL: 'http://localhost/',
  testMatch: packagesNames.map(packageName => `<rootDir>/packages/${packageName}/src/**/*.test.ts?(x)`),
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    ...packagesNames
      .map(packageName => ({
        [`@myproject/${packageName}(.*)$`]: `<rootDir>/packages/./${packageName}/src/$1`
      }))
      .reduce((all, item) => ({ ...all, ...item }), {})
  }
};
