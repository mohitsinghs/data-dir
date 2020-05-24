const fs = require('fs')
const dataDir = require('.')

/* eslint-env jest */

const expected = JSON.parse(fs.readFileSync('test/expected/all.json'), 'utf8')

test('should process nested mixed data', () => {
  expect(dataDir('test/fixtures')).toEqual(expected)
})
