# data-dir
[![Build Status](https://travis-ci.org/mohitsinghs/data-dir.svg)](https://travis-ci.org/mohitsinghs/data-dir)
[![npm](https://badge.fury.io/js/data-dir.svg)](http://badge.fury.io/js/data-dir)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/mohitsinghs.github.io/blob/source/LICENSE)  
Read yaml data from multiple files

## Install

```
npm i -D data-dir
```

## Uses

Consider a file `data/boxes.yml`

```yaml
- color : red
  height : 10
  width : 50
- color : green
  height : 20
  width : 30
- color : blue
  height : 40
  width : 30
```

and another file `data/circles.yml`

```yaml
- color : red
  redius : 10
- color : green
  redius : 20
- color : blue
  redius : 30
```

```js
const dataDir = require('data-dir')
let obj = dataDir('data')
console.log(obj)
```

This will return an object

```js
{ boxes:
  [ { color: 'red', height: 10, width: 50 },
    { color: 'green', height: 20, width: 30 },
    { color: 'blue', height: 40, width: 30 }
  ],
  circles:
  [ { color: 'red', redius: 10 },
    { color: 'green', redius: 20 },
    { color: 'blue', redius: 30 }
  ]
}
```