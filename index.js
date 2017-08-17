/* eslint-env node */
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

module.exports = function* (dirname) {
  let data = {}
  let files = fs.readdirSync(dirname)
  files.forEach(function (filename) {
    data[path.basename(filename, path.extname(filename))] = yaml.safeLoad(fs.readFileSync(dirname + filename, 'utf-8'))
  })
  return data
}
