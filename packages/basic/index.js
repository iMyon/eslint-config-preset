module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  // root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'airbnb-base',
    'prettier',
  ],

  // add your custom rules here
  rules: {
    // 禁止函数参数值的重新设置，禁用此规则，quasar bootfile会有这种操作
    'no-param-reassign': 'off',

    // 禁止使用void操作符
    'no-void': 'off',

    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': 'off',

    // import default export default配套使用
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    'import/default': 'error',

    // import时对引入后缀名的规则
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': 'off',

    // import未找到的路径时的处理，设置为禁用，适应quasar import 'src/xxxx'的导入方式
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',

    // 校验import的库是否在package里有以及位置是否正确，禁用
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',

    // 文件只有一个导出时使用export default， 禁用
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // 要求使用Error 对象作为Promise 拒绝原因，禁用
    'prefer-promise-reject-errors': 'off',


    // 取消以下规则交给prettier提交自动修复

    // 单双引号
    semi: 'off',
    // 句末分号
    'comma-dangle': 'off',
    // 在大括号内强制执行一致的间距
    'object-curly-spacing': 'off',
    // 最大长度
    'max-len': ['error', { code: 120 }],
  },
};
