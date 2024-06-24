---
sidebar_position: 4
id: example-configs
title: Example Configurations
---

## Example Configurations

### ESLint Configuration

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

### Prettier Configuration

Create a `.prettierrc` file in the root of your project with the following content:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### Lint and Format Scripts in `package.json`

```json
{
  "scripts": {
    "lint": "eslint 'src/**/*.{js,jsx}'",
    "lint:fix": "eslint 'src/**/*.{js,jsx}' --fix",
    "format": "prettier --write 'src/**/*.{js,jsx,json,css,md}'"
  }
}
```
