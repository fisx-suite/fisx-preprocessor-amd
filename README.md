fisx-preprocessor-amd
======

[![Dependency Status](https://david-dm.org/wuhy/fisx-preprocessor-amd.svg)](https://david-dm.org/wuhy/fisx-preprocessor-amd) [![devDependency Status](https://david-dm.org/wuhy/fisx-preprocessor-amd/dev-status.svg)](https://david-dm.org/wuhy/fisx-preprocessor-amd#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fisx-preprocessor-amd.svg?style=flat)](https://npmjs.org/package/fisx-preprocessor-amd)

> A preprocessor to wrap module code using amd style. 

## How to use

### Install

```shell
npm install fisx-preprocessor-amd --save-dev
```

### Add configure to fis-conf.js

```js
fis.match('/src/**.js', {
    preprocessor: fis.plugin('amd')
});
```

### Options

* disableWrap - `boolean` `optional`: if the processed file has disableWrap configure with `true`, the preprocessor will ignore this file

