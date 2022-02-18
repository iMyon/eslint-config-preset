# @imyon/eslint-config-preset
eslint preset

### Install

```shell
npm i -D @imyon/eslint-config-preset @imyon/eslint-config-prettier
```

### Usage
`.eslintrc.js`
```shell
{
  "extends": [
    "@imyon/eslint-config-preset"
  ]
}
```

`.prettierrc.js`
```js
module.exports = {
  ...require('@imyon/eslint-config-prettier'),
};
```
