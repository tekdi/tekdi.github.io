---
id: eslint
title: ESLint Configuration
---

## Angular Lint Configurations

### Installation

Angular CLI provides the inbuilt support for lint. 
Use `ng lint`  command inside a angular project to run schematics which will eventually generate required files and set some default rules for angular and typescript.

If there are multiple projects inside angular workspace try providing project name

```
ng lint [project] [options]
``` 

For more information checkout official documentation

### Configuration Files

By using above command it will install some required dependencies such as 

```eslint``` 
```angular-eslint``` 
```typescript-eslint``` 

Also it will generate `eslint.config.js` file with default configuration.
It updates the `angular.json` file for selected project.

Example `eslint.config.js` file

```js
// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
  
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
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

### Linting Scripts

Add the following scripts to your `package.json`:
```json
{
 "scripts": {
  "lint": "ng lint",
  "lint:fix": "ng lint --fix"
 }
}
```

### Run ESLint

The `lint` script runs ESLint on all Typescript (.ts)files within the src directory of your project.

Now you can lint your project by running:

```bash
npm run lint
```

or

```bash
yarn lint
```

### Run ESLint Fix

The `lint:fix` script not only runs ESLint on all typescript files within the src directory but also attempts to automatically fix any fixable linting errors.

Now you can fix lint errors/warnings in your project by running:

```bash
npm run lint:fix
```

or

```bash
yarn lint:fix
```
