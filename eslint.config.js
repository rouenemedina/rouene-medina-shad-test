import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwindcss from 'eslint-plugin-tailwindcss';
import next from "eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss,
      next,
      "jsx-a11y": jsxA11y
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "tailwindcss/no-custom-classname": "off", // Allow custom Tailwind class names
      "react-hooks/rules-of-hooks": "error", // Enforce React Hooks rules
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
      "jsx-a11y/alt-text": "warn", // Accessibility: Ensure alt text is used
      "jsx-a11y/anchor-is-valid": "warn", // Ensure valid links
    },
  },
  next.configs.recommended, // Next.js recommended rules
  react.configs.recommended, // React best practices
  reactHooks.configs.recommended, // React Hooks rules
  jsxA11y.configs.recommended, // Accessibility rules
  tailwindcss.configs.recommended, // Tailwind recommended rules
]
