---
id: prettier
title: Prettier Configuration
---

### Introduction

Prettier is an opinionated code formatter that supports many languages and integrates with most editors. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Installation

To install Prettier, run:

```bash
npm install prettier --save-dev
```

or if you’re using yarn :

```bash
yarn add prettier -D
```

### Example Configuration

Then we need to create `.prettierrc.json` and `.prettierignore` files in our root project directory.
Inside .prettierignore it’s better to add whatever we have inside .gitignore file.
Here’s an example:
```
# Ignore artifacts:
build
coverage
```

Add the following content into `.prettierrc.json` file:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### Formatting Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write 'src/**/*.{js,ts,json,css,md}'"
  } 
}
```

### Running Prettier

To format your code using Prettier, run the following command:

```bash
npm run format
```

or

```bash
yarn format
```

This will format all JavaScript, Typescript, JSON, CSS, and Markdown files in the src directory and its subdirectories.

### Prettier Configuration File Examples

Here are some additional examples of Prettier configuration files.

`.prettierrc.json`

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```

`.prettierrc.yaml`

```yaml
printWidth: 80
tabWidth: 2
useTabs: false
semi: true
singleQuote: true
quoteProps: "as-needed"
trailingComma: "es5"
bracketSpacing: true
arrowParens: "avoid"
proseWrap: "preserve"
htmlWhitespaceSensitivity: "css"
endOfLine: "lf"
```

`.prettierrc.js`

```js
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
};
```


### Configure Prettier to be used as an ESLint plugin
If you use ESLint, install `eslint-config-prettier` to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier

```bash
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

Add those plugin like below:

```js
// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-config-prettier");
const pluginPrettier = require("eslint-plugin-prettier");

  
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier
    ],
    plugins: {
      prettier: pluginPrettier
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-console": "warn"
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
```