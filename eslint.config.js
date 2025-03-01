import config from '@antfu/eslint-config';
import pluginPreferArrow from 'eslint-plugin-prefer-arrow';

export default config({
  ignores: [
    'webp.js',
  ],
  jsx: true,
  plugins: {
    'prefer-arrow': pluginPreferArrow,
  },
  react: true,
  rules: {
    'antfu/top-level-function': 'off',
    'arrow-body-style': 'error',
    'perfectionist/sort-enums': 'error',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-interfaces': 'error',
    'perfectionist/sort-object-types': 'error',
    'perfectionist/sort-objects': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'react-refresh/only-export-components': 'off',
    'react/no-nested-components': 'error',
    'react/prefer-shorthand-boolean': 'error',
    'ts/consistent-type-definitions': ['error', 'type'],
    'unused-imports/no-unused-imports': 'error',
  },
  stylistic: {
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: true,
  },
});
