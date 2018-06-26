'use strict'
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const pattern = /\.json|\.yml|\.yaml/

function processDir(dir) {
  let data = {}
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.resolve(dir, file)
    if (fs.lstatSync(filepath).isFile() && pattern.test(path.extname(file))) {
      const fileContent = fs.readFileSync(filepath, 'utf-8')
      if (/\.json/.test(path.extname(file))) {
        data[path.parse(file).name] = JSON.parse(fileContent)
      } else {
        data[path.parse(file).name] = yaml.safeLoad(fileContent)
      }
    }
    if (fs.lstatSync(filepath).isDirectory()) {
      data[path.parse(file).name] = processDir(filepath)
    }
  })
  return data
}

module.exports = processDir
