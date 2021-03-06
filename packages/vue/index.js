module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',

      parserOptions: {
        "parser": {
          // Script parser for `<script>`
          "js": "@babel/eslint-parser",

          // Script parser for `<script lang="ts">`
          "ts": "@typescript-eslint/parser",
        }
      },
      rules: {
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-essential',
    '@imyon/eslint-config-typescript',
    '@imyon/eslint-config-basic',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  env: {
    'vue/setup-compiler-macros': true
  }
}
