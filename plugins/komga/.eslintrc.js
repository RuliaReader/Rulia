module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'standard',
    '@lancercomet/eslint-rules',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],

  parser: '@typescript-eslint/parser',

  rules: {
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
