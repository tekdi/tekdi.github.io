---
sidebar_position: 2
tags: [javascript, linter, formatter, fixer, ESLint, styleguide]
---

# ESLint

## About
- ESLint is a static code analyser for Javasvcript code. It lets you find and fix problems in your JavaScript code
- ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

### Links
- [ESLint Homepage](https://ESLint.org/)
- [ESLint Playground](https://ESLint.org/play/)

### ESLint Plugins
Depending upon the project need or whether you are using React or Angular or Node, you may use different ESLint plugins:

#### For TypeScript based projects:
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): Tooling which enables you to use TypeScript with ESLint

#### For TypeScript based Nestjs (Nodejs) - projects
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc): JSDoc linting rules for ESLint
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security): ESLint rules for Node Security, helps identify potential security hotspots, but finds a lot of false positives which need triage by a human.
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs): eslint-plugin-sonarjs is an ESLint plugin maintained by Sonar, designed to help developers write Clean Code. This plugin exposes to ESLint users all original JS/TS rules from SonarJS, an analyzer for JavaScript and TypeScript within the Sonar ecosystem.

#### For React based projects:
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): Provides React specific linting rules for eslint
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): This ESLint plugin enforces the Rules of Hooks.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): This ESLint plugin validate that your components can safely be updated with Fast Refresh.
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y): This plugin runs Static AST checker for accessibility rules on JSX elements.

#### For projects using prettier as formatting tool:
##### Prettier
- [prettier](https://www.npmjs.com/package/prettier): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

##### ESLint plugins for Prettier
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

## Prerequisites
- Node.js (^18.18.0, ^20.9.0, or >=21.1.0) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

## Installation
### Installation for Angular projects
```js
@TODO
```

### Installation for Nodejs - Expressjs projects
```js
@TODO
```

### Installation for Nodejs - Nestjs projects
Navigate to your project directory and install npm packages required for ESLint, ESLint plugins and configurations. 

-  If using npm
```sh
npm install globals \
eslint \
@eslint/js \
@eslint/eslintrc \
typescript-eslint \
eslint-plugin-jsdoc \
eslint-plugin-security \
eslint-plugin-sonarjs \
prettier \
eslint-config-prettier \
eslint-plugin-prettier \
--save-dev
```

### Installation for React projects using TypeScript
Navigate to your project directory and install npm packages required for ESLint, ESLint plugins and configurations. 

-  If using npm
```sh
npm install globals \
eslint @eslint/js typescript-eslint \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-react-refresh \
eslint-plugin-jsx-a11y \
prettier eslint-config-prettier eslint-plugin-prettier \
--save-dev
```

-  Or if using yarn

```sh
yarn add globals \
eslint @eslint/js typescript-eslint \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-react-refresh \
eslint-plugin-jsx-a11y 
prettier eslint-config-prettier eslint-plugin-prettier \ 
--dev
```

:::warning
Remember to save these as `devDependencies` in your project.
:::

## Config file for eslint.config.js
- From v8.21.0, eslint announced a new config system. In the new system, .eslintrc* is no longer used. eslint.config.js would be the default config file name. In eslint v8, the legacy system (.eslintrc*) would still be supported, while in eslint v9, only the new system would be supported.
- And from v8.23.0, eslint CLI starts to look up eslint.config.js. So, if your eslint is >=8.23.0, you're 100% ready to use the new config system.
- You might want to check out the official blog posts,
  - https://eslint.org/blog/2022/08/new-config-system-part-1/
  - https://eslint.org/blog/2022/08/new-config-system-part-2/
  - https://eslint.org/blog/2022/08/new-config-system-part-3/
- Create and use a file named `eslint.config.js` in your python project root folder

### Recommended ESLint configuration for Angular projects
```js
@TODO
```

### Recommended ESLint configuration for Nodejs - Expressjs projects
```js
@TODO
```

### Recommended ESLint configuration for Nodejs - Nestjs projects
```js
// @ts-check
import eslint from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import securityPlugin from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';
const { configs: securityConfigs } = securityPlugin;

export default tseslint.config(
	{
		ignores: [
			'eslint.config.mjs',
			'node_modules',
			'**/node_modules/**',
			'**/*.js',
			'**/*.d.ts',
		],
	},
	// ESLint Configs
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,

	// ESLint Plugins
	// Prettier plugin
	eslintPluginPrettierRecommended,

	// JSdoc plugin
	jsdoc.configs['flat/recommended'],

	// Security plugin
	securityConfigs.recommended,

	// Sonar plugin
	sonarjs.configs.recommended,

	// Globals
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				project: ['tsconfig.json', 'tsconfig.spec.json'],
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		plugins: {},
		rules: {
			// TypeScript Rules
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',

			// JSdoc Rules
			'jsdoc/require-jsdoc': 'off',

			// EOL, Linebreak, and Indentation Rules
			'eol-last': ['error', 'always'],
			'linebreak-style': ['error', 'unix'],
			'no-trailing-spaces': 'error',
			indent: ['error', 'tab', { SwitchCase: 1 }],

			// Prettier and Indentation Rules
			'prettier/prettier': [
				'error',
				{
					arrowParens: 'always',
					endOfLine: 'lf',
					semi: true,
					singleQuote: true,
					tabWidth: 4,
					trailingComma: 'es5',
					useTabs: true,
				},
			],

			// Security Rules
			'security/detect-object-injection': 'warn',

			// Sonar Rules
			'sonarjs/no-duplicate-string': 'warn',
		},
	},
);
```

### Recommended ESLint configuration for React projects using TypeScript

```js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginEslintPrettieRecommendedConfig from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  pluginEslintPrettieRecommendedConfig,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      // Prettier and Indentation Rules
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          endOfLine: 'lf',
          semi: true,
          singleQuote: true,
          tabWidth: 4,
          trailingComma: 'es5',
          useTabs: true,
        },
      ],
      indent: ['error', 'tab', { SwitchCase: 1 }],
    },
  },
  {
    // Optional: ignore specific files or patterns
    ignores: ['**/node_modules/**', 'dist/**', 'build/**'],
  },
];
```


### Recommended ESLint configuration for React Native projects
```js
@TODO
```

<!-- ## How to use ESLint?
### A) Using ESLint outside the editor, via terminal
- Goto your project repo `cd my-python-project`
- Activate your project's venv `source /path-to-your-projects-env/bin/activate`
- Run ESLint as 

Example of scanning all .py files from current directory
```
ESLint *.py
```

Example of scanning all files from current directory (.) recursively, ignoring .venv folder
```
ESLint --recursive=y --ignore=.venv .
``` 

### B) Using ESLint inside VSCode editor
#### 1) Install this VSCode extension for ESLint
- [ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.ESLint)

#### 2) VSCode Settings for ESLint
You can edit `settings.json` of VSCode as below
- To run ESLint on code change
- To always show notifications

```json
{
    "ESLint.lintOnChange": true,
    "ESLint.showNotifications": "always",
}
``` 

#### 3) Open any python file in editor
- Open `Problems` tab in console, to see  linting errors if any

#### 4) References
- Read more here [Linting Python in Visual Studio Code
](https://code.visualstudio.com/docs/python/linting) -->
