const getFlagValue = require('./flagModule.js')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}.`)