module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-logical-order',
  ],
  plugins: ['stylelint-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'keyframe-declaration-no-important': true,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      'line-height': ['/px/'],
    },
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-/'],
      },
    ],
  },
}
