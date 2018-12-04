# data-dir

[![Build Status](https://travis-ci.com/mohitsinghs/data-dir.svg)](https://travis-ci.com/mohitsinghs/data-dir)
[![npm](https://badge.fury.io/js/data-dir.svg)](http://badge.fury.io/js/data-dir)
[![codecov](https://codecov.io/gh/mohitsinghs/data-dir/branch/master/graph/badge.svg)](https://codecov.io/gh/mohitsinghs/data-dir)
[![dependencies Status](https://david-dm.org/mohitsinghs/data-dir/status.svg)](https://david-dm.org/mohitsinghs/data-dir)
[![devDependencies Status](https://david-dm.org/mohitsinghs/data-dir/dev-status.svg)](https://david-dm.org/mohitsinghs/data-dir?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/mohitsinghs.github.io/blob/source/LICENSE)

> Read data from json and yaml files recursively

## Install

```sh
npm install data-dir
```

## Uses

For each file the filename becomes the key and data from file becomes value.

```js
const dataDir = require('data-dir')
let obj = dataDir('dir-with-nested-yaml-json') // returns combined data
```
