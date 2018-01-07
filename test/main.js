import fs from 'fs'
import test from 'ava'
import dataDir from '../'

const expected = JSON.parse(fs.readFileSync('test/expected/all.json'), 'utf8')
test.cb('should process nested mixed data', t => {
  t.deepEqual(dataDir('test/fixtures'), expected)
  t.end()
})
