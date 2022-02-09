module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {}
    },
  ],
}
