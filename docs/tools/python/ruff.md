---
sidebar_position: 2
---

# Ruff

## Info
- Ruff is a superfast Python **linter + formatter**
- Ruff can help you with linting, formatting code as per configuration
- It also lets you sort imports as per `isort` standard

## Links
- [Ruff Homepage](https://docs.astral.sh/ruff/)

## VSCode Extension for Ruff
- [Ruff VSCode Extension](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff)

## Config file for ruff.toml
- Create and use a file named `ruff.toml` in your python project root folder
- You can use the `ruff.toml` file contents given below

```yml
# Exclude a variety of commonly ignored directories.
exclude = [
    ".bzr",
    ".direnv",
    ".eggs",
    ".git",
    ".git-rewrite",
    ".hg",
    ".ipynb_checkpoints",
    ".mypy_cache",
    ".nox",
    ".pants.d",
    ".pyenv",
    ".pytest_cache",
    ".pytype",
    ".ruff_cache",
    ".svn",
    ".tox",
    ".venv",
    ".vscode",
    "__pypackages__",
    "_build",
    "buck-out",
    "build",
    "dist",
    "node_modules",
    "site-packages",
    "venv",
]

# Same as Black.
line-length = 88
indent-width = 4

[lint]
# Enable Pyflakes (`F`) and a subset of the pycodestyle (`E`)  codes by default.
# Unlike Flake8, Ruff doesn't enable pycodestyle warnings (`W`) or
# McCabe complexity (`C901`) by default.
# Enable flake8-bugbear (`B`) rules, in addition to the defaults.
select = ["E4", "E7", "E9", "F", "B"]

# Avoid enforcing line-length violations (`E501`)
ignore = ["E501"]

# Allow fix for all enabled rules (when `--fix`) is provided.
# Avoid trying to fix flake8-bugbear (`B`) violations.
fixable = ["ALL"]
unfixable = ["B"]

# Ignore `E402` (import violations) in all `__init__.py` files, and in select subdirectories.
[lint.per-file-ignores]
"__init__.py" = ["E402"]
"**/{tests,docs,tools}/*" = ["E402"]

[format]
# Like Black, use double quotes for strings.
quote-style = "double"

# Like Black, indent with spaces, rather than tabs.
indent-style = "space"

# Like Black, respect magic trailing commas.
skip-magic-trailing-comma = false

# Enable auto-formatting of code examples in docstrings. Markdown,
# reStructuredText code/literal blocks and doctests are all supported.
#
# This is currently disabled by default, but it is planned for this
# to be opt-out in the future.
docstring-code-format = false

# Set the line length limit used when formatting code snippets in
# docstrings.
#
# This only has an effect when the `docstring-code-format` setting is
# enabled.
docstring-code-line-length = "dynamic"
```

## VSCode Settings for pylint
You can edit settings.json of VSCode as below
- To set Ruff as default formatter for Python files
- To auto format code file on Save
- To auto organize imports on Save

```json
{
   "[python]": {
       "editor.defaultFormatter": "charliermarsh.ruff",
       "editor.formatOnSave": true,
       "editor.codeActionsOnSave": {
           "source.organizeImports": "explicit"
       },
   },
}
``` 
