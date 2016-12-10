fisx-preprocessor-amd
======
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

