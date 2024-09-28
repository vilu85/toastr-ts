import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';

export default tseslint.config(
	{ ignores: ['**/.vscode/*', '**/node_modules/*', '**/dist/*', '**/*.d.ts'] },
	{
		files: ['**/*.ts'],
		extends: [
			pluginJs.configs.recommended,
			...tseslint.configs.recommended,
		],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser: typescriptEslintParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				createDefaultProgram: true,
			},
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			// Require the use of === and !==
			eqeqeq: 'error',
			// Disallow unnecessary semicolons
			'no-extra-semi': 'error',
			// Disallow semicolons instead of ASI
			semi: ['error', 'always'],
			// Disallow console.log and debugger statements
			'no-console': 'off',
			'no-debugger': 'error',
			// Enforce consistent indentation
			indent: ['error', 'tab'],
			// Enforce consistent linebreak style
			'linebreak-style': ['error', 'unix'],
			// Enforce double quotes for strings
			quotes: ['error', 'single'],
			// Enforce using arrow functions for callbacks
			'prefer-arrow-callback': 'off',
			// Enforce using const for variables that don't need to be reassigned
			'prefer-const': 'error',
			'no-shadow': 'off',
		},
	}
);
