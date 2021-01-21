const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const pattern = /\.json|\.yml|\.yaml/

function processDir(dir) {
  const data = {}
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.resolve(dir, file)
    if (fs.lstatSync(filepath).isFile() && pattern.test(path.extname(file))) {
      const fileContent = fs.readFileSync(filepath, 'utf-8')
      data[path.parse(file).name] = /\.json/.test(path.extname(file))
        ? JSON.parse(fileContent)
        : yaml.load(fileContent)
    }
    if (fs.lstatSync(filepath).isDirectory()) {
      data[path.parse(file).name] = processDir(filepath)
    }
  })
  return data
}

module.exports = processDir
