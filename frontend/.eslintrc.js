module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  // ここにカスタムルールを追加します。
  rules: {
    'no-console': 'off', //console.log();OK
    'no-unused-vars': 'off', //使っていない変数あってもOK
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/max-attributes-per-line': 'off', // １行あたり属性値の最大数を制限しない
    'vue/singleline-html-element-content-newline': 'off', // HTMLタグが1列でもOK
    // prettierの設定
    'prettier/prettier': [
      'error',
      {
        semi: false, // セミコロン不要
        htmlWhitespaceSensitivity: 'ignore', // aタグの羅列などで変な風にならないように追記
        singleQuote: true, // シングルクォート使用
      },
    ],
  },
}
