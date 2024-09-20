import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from "eslint-plugin-react";

export default tseslint.config(
    {ignores: ['dist']},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react': react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['off'],
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'react/react-in-jsx-scope': 'off',
            'react/require-default-props': 'off',
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'no-unused-vars': 'warn',
            'indent': [2, 4],
            'quote-props': ['warn', 'as-needed', {unnecessary: false}],
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'object-shorthand': 'warn',
        },
    },
)
