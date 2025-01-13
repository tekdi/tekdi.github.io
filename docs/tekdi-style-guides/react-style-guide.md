---
sidebar_position: 2
tags: [react]
---

# React Style Guide

## Style Guide
@TODO

## Linting, Formatting Tools
To help you assist in following style guide, we recommend **using tools suggested below, along with sample configs files suggested** to make most of these tools.

### ESLint
Learn more about [ESLint tool](../tools/javascript/eslint)

#### Link to React specific docs for ESLint
- [ESLint, ESLint Plugins Installation](../tools/javascript/eslint#installation-for-react-projects-using-typescript)
- [ESLint Configuration](../tools/javascript/eslint#recommended-eslint-configuration-for-react-projects-using-typescript)

### Prettier
Learn more about [Prettier tool](../tools/common/prettier)

### Stylelint
Learn more about [Stylelint tool](../tools/css/stylelint)


<!-- Welcome to the React.js Style Guide documentation. This guide covers best practices for writing React code, setting up linters, formatters, and example configurations.

## Example Configurations

### ESLint Configuration

Create a `.ESLintrc.json` file in the root of your project with the following content:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "ESLint:recommended",
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
    "lint": "ESLint 'src/**/*.{js,jsx}'",
    "lint:fix": "ESLint 'src/**/*.{js,jsx}' --fix",
    "format": "prettier --write 'src/**/*.{js,jsx,json,css,md}'"
  }
}
```

## React Style Guide

This style guide outlines the coding conventions and best practices for writing React code. Following these guidelines will help maintain consistency and readability across your React projects.

### General Guidelines

1. **Use Function Components**
   - Prefer functional components over class components.
   ```jsx
   // Avoid
   class MyComponent extends React.Component {
     render() {
       return <div>Hello, World!</div>;
     }
   }

   // Prefer
   function MyComponent() {
     return <div>Hello, World!</div>;
   }
   ```

2. **Use Hooks for State and Side Effects**
   - Utilize React hooks for managing state and side effects.
   ```jsx
   import { useState, useEffect } from 'react';

   function MyComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `Count: ${count}`;
     }, [count]);

     return (
       <div>
         <p>{count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

3. **Component Naming**
   - Use PascalCase for React component names.
   ```jsx
   // Avoid
   function mycomponent() {
     return <div />;
   }

   // Prefer
   function MyComponent() {
     return <div />;
   }
   ```

### JSX Style

1. **Self-Closing Tags**
   - Use self-closing tags for elements without children.
   ```jsx
   // Avoid
   <img src="image.png"></img>

   // Prefer
   <img src="image.png" />
   ```

2. **Quotes in JSX Attributes**
   - Use double quotes for JSX attributes.
   ```jsx
   // Avoid
   <div className='container'></div>

   // Prefer
   <div className="container"></div>
   ```

3. **JSX Bracket Alignment**
   - Align the closing tag of a multi-line JSX element with the opening tag.
   ```jsx
   // Avoid
   <Button
     onClick={handleClick}
     color="blue"
     size="large"
     >
     Click Me
   </Button>

   // Prefer
   <Button
     onClick={handleClick}
     color="blue"
     size="large"
   >
     Click Me
   </Button>
   ```

### Styling and CSS

1. **CSS-in-JS**
   - Use CSS-in-JS libraries like styled-components or emotion for styling.
   ```jsx
   import styled from 'styled-components';

   const Button = styled.button`
     background: blue;
     color: white;
     padding: 10px;
   `;

   function App() {
     return <Button>Click Me</Button>;
   }
   ```

2. **Class Names**
   - Use `camelCase` for CSS class names.
   ```jsx
   // Avoid
   <div className="container-item"></div>

   // Prefer
   <div className="containerItem"></div>
   ```

### State Management

1. **useState for Local State**
   - Use `useState` for managing local component state.
   ```jsx
   const [count, setCount] = useState(0);
   ```

2. **useReducer for Complex State**
   - Use `useReducer` for more complex state logic.
   ```jsx
   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);
     return (
       <div>
         <p>{state.count}</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
       </div>
     );
   }
   ```
```

## ESLint Configuration

### Installation

To install ESLint and the necessary plugins, run:

```bash
npm install ESLint ESLint-plugin-react ESLint-plugin-jsx-a11y ESLint-plugin-react-hooks --save-dev
```

### Example Configuration

Create a `.ESLintrc.json` file in the root of your project with the following content:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "ESLint:recommended",
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
    "lint": "ESLint 'src/**/*.{js,jsx}'",
    "lint:fix": "ESLint 'src/**/*.{js,jsx}' --fix"
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


## Prettier Configuration

### Introduction

Prettier is an opinionated code formatter that supports many languages and integrates with most editors. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Installation

To install Prettier and the necessary plugins, run:

```bash
npm install prettier ESLint-config-prettier ESLint-plugin-prettier --save-dev
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
 -->
