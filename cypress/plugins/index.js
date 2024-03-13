const cucumber = require('cypress-cucumber-preprocessor').default 

const {defineConfig} = require('cypress')

module.exports = (on, config) => {

  on('file:preprocessor', cucumber())

}