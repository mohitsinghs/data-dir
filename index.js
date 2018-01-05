'use strict'
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

module.exports = (dir) => {
  let data = {}
  let files = fs.readdirSync(dir)
  files.forEach(file => {
    data[path.parse(file).name] = yaml.safeLoad(fs.readFileSync(path.resolve(dir, file), 'utf-8'))
  })
  return data
}
