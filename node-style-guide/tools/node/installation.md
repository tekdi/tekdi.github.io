## Installation
Execute the following command 

This npm command installs ESLint and Prettier along with essential plugins and configurations for TypeScript projects. ESLint ensures code quality and adherence to coding standards, while Prettier enforces consistent code formatting. Together with TypeScript-specific extensions, these tools streamline development by promoting clean, standardized code.

```
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

eslint: The core ESLint library.

prettier: A popular code formatter.

eslint-config-prettier: Disables ESLint rules that conflict with Prettier.

eslint-plugin-prettier: Runs Prettier as an ESLint rule.

@typescript-eslint/parser and @typescript-eslint/eslint-plugin: ESLint parser and plugin for TypeScript support.

## Command to lint and format the code:
```
npm run lint-and-format
```

