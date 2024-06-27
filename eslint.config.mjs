import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import standardWithTypeScript from 'eslint-config-standard-with-typescript'

// Configuração de exportação padrão
export default [
  {
    files: ['**/*.{js,mjs,ts,cjs,jsx,tsx}'],
    ignores: ['babel.config.js'], // Padrões a ignorar
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json' // Usando tsconfig.json em vez de eslint.config.mjs
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        jest: true
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...standardWithTypeScript.rules,
      'quotes': ['error', 'single'], // Usar aspas duplas
      'semi': ['error', 'never'], // Remover ponto e vírgula
      '@typescript-eslint/explicit-function-return-type': ['error'],
      'space-before-function-paren': ['error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      '@typescript-eslint/space-before-function-paren': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
