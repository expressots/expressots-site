module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    // Disable formatting rules that prevent builds
    'prettier/prettier': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    quotes: 'off',
    // Disable strict class ordering rules
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
