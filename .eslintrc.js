module.exports = {
  root: true,

  env: {
    es2020: true,
    browser: true,
    node: true,
    commonjs: true,
  },

  plugins: ['prettier', 'react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
    'plugin:react/recommended',
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
      },

      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
    },
  ],
};
