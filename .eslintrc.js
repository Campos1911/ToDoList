module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'unused-imports',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-bitwise': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,

        trailingComma: 'es5',
        endOfLine: 'auto',
        parser: 'typescript',
      },
    ],
    'react/no-unknown-property': [2, { ignore: ['class', 'for'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-curly-newline': 'off',
    'no-useless-computed-key': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off',
    'no-async-promise-executor': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Relative imports outside of src/ are not allowed.',
          },
        ],
      },
    ],

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^routes/',
          '/^@/routes/',
          '/^components/',
          '/^@/components/',
          '/^context/',
          '/^@/context/',
          '/^hooks/',
          '/^@/hooks/',
          '/^interfaces/',
          '/^@/interfaces/',
          '/^services/',
          '/^@/services/',
          '/^store/',
          '/^@/store/',
          '/^utils/',
          '/^@/utils/',
          '/^@//',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },


};


