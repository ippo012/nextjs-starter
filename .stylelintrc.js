module.exports = {
  plugins: ['stylelint-scss'],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],

  rules: {
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-no-qualifying-type': true,
    'declaration-no-important': true,
    'declaration-empty-line-before': null,
    'value-keyword-case': null,
  },
};
