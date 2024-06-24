---
id: eslint
title: ESLint Configuration
---

## ESLint Configuration

### Installation

To install ESLint and the necessary plugins, run:

```bash
npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
```

### Example Configuration

Create a `.eslintrc.json` file in the root of your project with the following content:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "jsx-a11y", "react-hooks", "prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-console": "warn",
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": ["invalidHref", "preferButton"]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### Linting Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint 'src/**/*.{js,jsx}'",
    "lint:fix": "eslint 'src/**/*.{js,jsx}' --fix"
  }
}
```

### Run ESLint

The `lint` script runs ESLint on all JavaScript (.js) and JSX (.jsx) files within the src directory of your project.

Now you can lint your project by running:

```bash
npm run lint
```

or

```bash
yarn lint
```

### Run ESLint Fix

The `lint:fix` script not only runs ESLint on all JavaScript and JSX files within the src directory but also attempts to automatically fix any fixable linting errors.

Now you can lint:fix your project by running:

```bash
npm run lint:fix
```

or

```bash
yarn lint:fix
```
