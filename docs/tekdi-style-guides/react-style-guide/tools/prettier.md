---
id: prettier
title: Prettier Configuration
---

## Prettier Configuration

### Introduction

Prettier is an opinionated code formatter that supports many languages and integrates with most editors. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Installation

To install Prettier and the necessary plugins, run:

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

### Example Configuration

Create a `.prettierrc` file in the root of your project with the following content:

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
    "format": "prettier --write 'src/**/*.{js,jsx,json,css,md}'"
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

This will format all JavaScript, JSX, JSON, CSS, and Markdown files in the src directory and its subdirectories.

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
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
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
jsxSingleQuote: false
trailingComma: "es5"
bracketSpacing: true
jsxBracketSameLine: false
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
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
};
```

