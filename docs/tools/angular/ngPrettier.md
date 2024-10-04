---
id: angular_prettier
title: Angular Prettier 
---

### Introduction

Prettier is an opinionated code formatter that supports many languages and integrates with most editors. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Install Prettier:

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
  "semi": true,
  "printWidth": 80, // Code with longer lines will be wrapped at 80 characters
  "tabWidth": 2, // Specifies the number of spaces per indentation level.
  "trailingComma": "es5",
  "endOfLine": "auto"
}
```
<!-- 
trailingComma Options:

"none": No trailing commas.
"es5": Trailing commas where valid in ES5 (objects, arrays, etc.).
"all": Trailing commas wherever possible (including function parameters). 
-->


### Formatting Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "format:ng": "prettier --write 'src/**/*.{js,ts,json,css,md,html,scss}'"
  } 
}
```

### Running Prettier

To format your code using Prettier, run the following command:

```bash
npm run format:ng
```

or

```bash
yarn format:ng
```

This will format all JavaScript, Typescript, JSON, CSS, and Markdown files in the src directory and its subdirectories.

### Prettier Configuration File Examples

Here are some additional examples of Prettier configuration files.

`.prettierrc.json`

```json
{
  "singleQuote": true,
  "semi": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```
<!-- 
1. arrowParens: Controls the printing of parentheses around a sole arrow function parameter.
2. bracketSpacing: Controls the printing of spaces inside object literals.

3. proseWrap Options: Controls how Prettier wraps markdown text.
    -"always": Wrap prose if it exceeds the print width.
    -"never": Do not wrap prose.
    -"preserve": Wrap prose as-is.
4. htmlWhitespaceSensitivity Options: Controls how Prettier handles whitespaces in HTML.
    -"css": Respect the default value of CSS display property.
    -"strict": Whitespaces are considered sensitive.
    -"ignore": Whitespaces are considered insensitive.

 -->

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

### Step 1: Update your .eslintrc.json to integrate Prettier with ESLint:

```js
// @ts-check
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "prettier/prettier": "error"
      }
    },
    {
      "files": ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "rules": {}
    }
  ]
}
```

<!-- 
Summary
"eslint:recommended": Core ESLint rules recommended for all JavaScript projects.
"plugin:@typescript-eslint/recommended": TypeScript-specific linting rules.
"plugin:@angular-eslint/recommended": Angular-specific linting rules.
"plugin:@angular-eslint/template/process-inline-templates": Linting for inline Angular templates.
"plugin:prettier/recommended": Disables ESLint rules that conflict with Prettier to ensure code formatting consistency.
 -->
### Step 2: Run this command to Fix Formatting Issues
```
npm run format:ng
```

### Step 3: Re-run the Linting Command
``` 
npm run lint:ng
```