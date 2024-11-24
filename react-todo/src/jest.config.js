module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy'
    },
    testEnvironment: 'jsdom'
  };
  