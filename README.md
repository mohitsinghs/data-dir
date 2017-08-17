# data-dir
[![Build Status](https://travis-ci.org/mohitsinghs/data-dir.svg)](https://travis-ci.org/mohitsinghs/data-dir)
[![npm](https://badge.fury.io/js/data-dir.svg)](http://badge.fury.io/js/data-dir)
[![dependencies](https://david-dm.org/mohitsinghs/data-dir/status.svg)](https://david-dm.org/mohitsinghs/data-dir)
[![devDependencies](https://david-dm.org/mohitsinghs/data-dir/dev-status.svg)](https://david-dm.org/mohitsinghs/data-dir?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/mohitsinghs.github.io/blob/source/LICENSE)  
Read yaml data from multiple files and returns a generator with values
> Note : This module is just a workaround so be warned

## Install

```
npm i -g data-dir
```

## Usages
Suppose you have several `yml|yaml` file in a data directory.
In the returned object, filenames are the keys with parsed content as value.

```js
const dataDir = require('data-dir')
var name = dataDir('data/')
console.log(name.next().value)
```
