const config = require('./config')

module.exports = {
  testMatch: ['**/src/**/*.spec.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  globals: {
    APP: config()
  }
}
