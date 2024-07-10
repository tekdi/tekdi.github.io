## Prettier
Prettier is an opinionated code formatter that enforces consistent code style by parsing your code and re-printing it with its own rules. It supports multiple languages and integrates seamlessly with various editors and build tools. By automating code formatting, Prettier reduces the time spent on manual styling and helps teams adhere to a unified code style across their projects.


## Scripts

Add the following scripts to your package.json 
```json
"scripts": {
  "format": "prettier --write src",
}
```

## Configure your project with prettier

```js
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```
