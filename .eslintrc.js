module.exports = {
  ignorePatterns: ['build', 'node_modules/'],
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    camelcase: 'off',
    'cypress/no-unnecessary-waiting': 'off',
  }
};
