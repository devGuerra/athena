/**
 * Synapse entry file
 * API to handle data operations on Brian schema
 * @memberof core
 */
/* eslint-disable no-global-assign, import/no-unassigned-import */
require('dotenv').config()
require('babel-polyfill')
require = require('esm')(module)

module.exports = require('./src/main')
