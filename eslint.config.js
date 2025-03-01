import config from '@antfu/eslint-config';

export default config({
  ignores: [
    'webp.js',
  ],
  jsx: true,
  react: true,
  rules: {
    'antfu/top-level-function': 'off',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-object-types': 'error',
    'perfectionist/sort-objects': 'error',
    'react-refresh/only-export-components': 'off',
    'react/prefer-shorthand-boolean': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  stylistic: {
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: true,
  },
});
