export default {
  root: true,
  env: { browser: true, es2020: true, node: 'current', 'jest/globals': true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:jest/recommended', 'next/babel', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'prefer-const': 'error',
    semi: ['error', 'never'],
    'react-hooks/exhaustive-deps': 'off',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-extra-semi': 'off',
  },
}
