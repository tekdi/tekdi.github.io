---
id: angular_eslint
title: Angular ESLint
---

### Introduction

ESLint is a static code analysis tool for identifying problematic patterns in JavaScript/TypeScript code. It enforces coding standards and helps catch errors early.

### Step 1: Setting Up ESLint in an Angular Project

### 1. Install ESLint:

```
ng add @angular-eslint/schematics
``` 

### 2. Configure ESLint:

Create or update the .eslintrc.json file in your project root:

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
        "plugin:@angular-eslint/template/process-inline-templates"
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
        ]
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

:::info
**root:** Indicates that this is the root configuration file.

**ignorePatterns:** Specifies patterns of files and directories that ESLint should ignore.

**overrides:** Provides different configurations for different sets of files.

  **1. TypeScript Files (*.ts):**

**extends**: Extends configurations from recommended rulesets.

**rules**: Defines specific linting rules for directive and component selectors.

**2. HTML Files (*.html):**

**extends**: Extends configurations from recommended rulesets for Angular templates.
:::


### Step 2: Add Linting Script to package.json

Add the following scripts to your `package.json` to run ESLint:
```json
{
 "scripts": {
  "lint:ng": "ng lint",
  "lint:fix": "ng lint --fix"
 }
}
```

### Step 3: Running ESLint

The `lint` script runs ESLint on all Typescript (.ts)files within the src directory of your project.

Now you can lint your project by running:

```bash
npm run lint:ng
```

or

```bash
yarn lint:ng
```

### Step 4: Fixing Linting Errors

The `lint:fix` script not only runs ESLint on all typescript files within the src directory but also attempts to automatically fix any fixable linting errors.

Now you can fix lint errors/warnings in your project by running:

```bash
npm run lint:fix
```

or

```bash
yarn lint:fix
```