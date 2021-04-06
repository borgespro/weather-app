module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^@/assets/',
          '/^@/config/',
          '/^@/contexts/',
          '/^@/hooks/',
          '/^@/store/',
          '/^@/typing/',
          '/^@/routes/',
          '/^@/ui/',
          'absolute',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'global-require': 'off',
    'no-console': 'off',
    radix: 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/contexts': './src/contexts',
          '@/hooks': './src/hooks',
          '@/routes': './src/routes',
          '@/store': './src/store',
          '@/typings': './src/typings',
          '@/ui': './src/ui',
        },
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
