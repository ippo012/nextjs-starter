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
    'plugin:react-hooks/recommended',
  ],

  rules: {
    'react/display-name': 'off',
  },

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

      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
