module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    browser: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': [
      'error', process.platform === 'win32' ? 'windows' : 'unix'
    ],
    'import/extensions': [0],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['error', { code: 80 }],
  },
  settings: {},
};
