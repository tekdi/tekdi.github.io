"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[3044],{59221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tools/python/pylint","title":"Pylint","description":"About","source":"@site/docs/tools/python/pylint.md","sourceDirName":"tools/python","slug":"/tools/python/pylint","permalink":"/docs/tools/python/pylint","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"python","permalink":"/docs/tags/python"},{"inline":true,"label":"styleguide","permalink":"/docs/tags/styleguide"}],"version":"current","lastUpdatedBy":"Ashwin Date","lastUpdatedAt":1743614200000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"tags":["python","styleguide"]},"sidebar":"tutorialSidebar","previous":{"title":"Python Tools","permalink":"/docs/category/python-tools"},"next":{"title":"Ruff","permalink":"/docs/tools/python/ruff"}}');var s=t(74848),o=t(28453);const a={sidebar_position:2,tags:["python","styleguide"]},r="Pylint",l={},d=[{value:"About",id:"about",level:2},{value:"Links",id:"links",level:3},{value:"Installation",id:"installation",level:2},{value:"Config file for .pylintrc",id:"config-file-for-pylintrc",level:2},{value:"How to use Pylint?",id:"how-to-use-pylint",level:2},{value:"A) Using pylint outside the editor, via terminal",id:"a-using-pylint-outside-the-editor-via-terminal",level:3},{value:"B) Using pylint inside VSCode editor",id:"b-using-pylint-inside-vscode-editor",level:3},{value:"1) Install this VSCode extension for Pylint",id:"1-install-this-vscode-extension-for-pylint",level:4},{value:"2) VSCode Settings for pylint",id:"2-vscode-settings-for-pylint",level:4},{value:"3) Open any python file in editor",id:"3-open-any-python-file-in-editor",level:4},{value:"4) References",id:"4-references",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pylint",children:"Pylint"})}),"\n",(0,s.jsx)(n.h2,{id:"about",children:"About"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pylint is a static code analyser for Python 2 or 3. The latest version supports Python 3.8.0 and above."}),"\n",(0,s.jsx)(n.li,{children:"Pylint analyses your code without actually running it. It checks for errors, enforces a coding standard, looks for code smells, and can make suggestions about how the code could be refactored."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pylint.pycqa.org/",children:"Pylint Homepage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pylint.readthedocs.io/en/stable/tutorial.html",children:"Pylint Tutorial"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can install pylint in your project's venv using command ",(0,s.jsx)(n.code,{children:"pip install pylint"})," or ",(0,s.jsx)(n.code,{children:"pip3 install pylint"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"config-file-for-pylintrc",children:"Config file for .pylintrc"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create and use a file named ",(0,s.jsx)(n.code,{children:".pylintrc"})," in your python project root folder"]}),"\n",(0,s.jsxs)(n.li,{children:["You can use the ",(0,s.jsx)(n.code,{children:".pylintrc"})," file contents given below"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:".pylintrc"})," content given below is taken from ",(0,s.jsx)(n.a,{href:"https://google.github.io/styleguide/pylintrc",children:"https://google.github.io/styleguide/pylintrc"}),", with few modifications"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Tekdi specific changes made in google\'s .pylintrc\n# # Added in [MESSAGES CONTROL] \n# # # disable = line-too-long\n\n# This Pylint rcfile contains a best-effort configuration to uphold the\n# best-practices and style described in the Google Python style guide:\n#   https://google.github.io/styleguide/pyguide.html\n#\n# Its canonical open-source location is:\n#   https://google.github.io/styleguide/pylintrc\n\n[MAIN]\n\n# Files or directories to be skipped. They should be base names, not paths.\nignore=third_party\n\n# Files or directories matching the regex patterns are skipped. The regex\n# matches against base names, not paths.\nignore-patterns=\n\n# Pickle collected data for later comparisons.\npersistent=no\n\n# List of plugins (as comma separated values of python modules names) to load,\n# usually to register additional checkers.\nload-plugins=\n\n# Use multiple processes to speed up Pylint.\njobs=4\n\n# Allow loading of arbitrary C extensions. Extensions are imported into the\n# active Python interpreter and may run arbitrary code.\nunsafe-load-any-extension=no\n\n\n[MESSAGES CONTROL]\n\n# Only show warnings with the listed confidence levels. Leave empty to show\n# all. Valid levels: HIGH, INFERENCE, INFERENCE_FAILURE, UNDEFINED\nconfidence=\n\n# Enable the message, report, category or checker with the given id(s). You can\n# either give multiple identifier separated by comma (,) or put this option\n# multiple time (only on the command line, not in the configuration file where\n# it should appear only once). See also the "--disable" option for examples.\n#enable=\n\n# Disable the message, report, category or checker with the given id(s). You\n# can either give multiple identifiers separated by comma (,) or put this\n# option multiple times (only on the command line, not in the configuration\n# file where it should appear only once).You can also use "--disable=all" to\n# disable everything first and then reenable specific checks. For example, if\n# you want to run only the similarities checker, you can use "--disable=all\n# --enable=similarities". If you want to run only the classes checker, but have\n# no Warning level messages displayed, use"--disable=all --enable=classes\n# --disable=W"\ndisable=R,\n        abstract-method,\n        apply-builtin,\n        arguments-differ,\n        attribute-defined-outside-init,\n        backtick,\n        bad-option-value,\n        basestring-builtin,\n        buffer-builtin,\n        c-extension-no-member,\n        consider-using-enumerate,\n        cmp-builtin,\n        cmp-method,\n        coerce-builtin,\n        coerce-method,\n        delslice-method,\n        div-method,\n        eq-without-hash,\n        execfile-builtin,\n        file-builtin,\n        filter-builtin-not-iterating,\n        fixme,\n        getslice-method,\n        global-statement,\n        hex-method,\n        idiv-method,\n        implicit-str-concat,\n        import-error,\n        import-self,\n        import-star-module-level,\n        input-builtin,\n        intern-builtin,\n        invalid-str-codec,\n        locally-disabled,\n        long-builtin,\n        long-suffix,\n        map-builtin-not-iterating,\n        misplaced-comparison-constant,\n        missing-function-docstring,\n        metaclass-assignment,\n        next-method-called,\n        next-method-defined,\n        no-absolute-import,\n        no-init,  # added\n        no-member,\n        no-name-in-module,\n        no-self-use,\n        nonzero-method,\n        oct-method,\n        old-division,\n        old-ne-operator,\n        old-octal-literal,\n        old-raise-syntax,\n        parameter-unpacking,\n        print-statement,\n        raising-string,\n        range-builtin-not-iterating,\n        raw_input-builtin,\n        rdiv-method,\n        reduce-builtin,\n        relative-import,\n        reload-builtin,\n        round-builtin,\n        setslice-method,\n        signature-differs,\n        standarderror-builtin,\n        suppressed-message,\n        sys-max-int,\n        trailing-newlines,\n        unichr-builtin,\n        unicode-builtin,\n        unnecessary-pass,\n        unpacking-in-except,\n        useless-else-on-loop,\n        useless-suppression,\n        using-cmp-argument,\n        wrong-import-order,\n        xrange-builtin,\n        zip-builtin-not-iterating,\n        line-too-long,\n\n\n[REPORTS]\n\n# Set the output format. Available formats are text, parseable, colorized, msvs\n# (visual studio) and html. You can also give a reporter class, eg\n# mypackage.mymodule.MyReporterClass.\noutput-format=text\n\n# Tells whether to display a full report or only the messages\nreports=no\n\n# Python expression which should return a note less than 10 (10 is the highest\n# note). You have access to the variables errors warning, statement which\n# respectively contain the number of errors / warnings messages and the total\n# number of statements analyzed. This is used by the global evaluation report\n# (RP0004).\nevaluation=10.0 - ((float(5 * error + warning + refactor + convention) / statement) * 10)\n\n# Template used to display messages. This is a python new-style format string\n# used to format the message information. See doc for all details\n#msg-template=\n\n\n[BASIC]\n\n# Good variable names which should always be accepted, separated by a comma\ngood-names=main,_\n\n# Bad variable names which should always be refused, separated by a comma\nbad-names=\n\n# Colon-delimited sets of names that determine each other\'s naming style when\n# the name regexes allow several styles.\nname-group=\n\n# Include a hint for the correct naming format with invalid-name\ninclude-naming-hint=no\n\n# List of decorators that produce properties, such as abc.abstractproperty. Add\n# to this list to register other decorators that produce valid properties.\nproperty-classes=abc.abstractproperty,cached_property.cached_property,cached_property.threaded_cached_property,cached_property.cached_property_with_ttl,cached_property.threaded_cached_property_with_ttl\n\n# Regular expression matching correct function names\nfunction-rgx=^(?:(?P<exempt>setUp|tearDown|setUpModule|tearDownModule)|(?P<camel_case>_?[A-Z][a-zA-Z0-9]*)|(?P<snake_case>_?[a-z][a-z0-9_]*))$\n\n# Regular expression matching correct variable names\nvariable-rgx=^[a-z][a-z0-9_]*$\n\n# Regular expression matching correct constant names\nconst-rgx=^(_?[A-Z][A-Z0-9_]*|__[a-z0-9_]+__|_?[a-z][a-z0-9_]*)$\n\n# Regular expression matching correct attribute names\nattr-rgx=^_{0,2}[a-z][a-z0-9_]*$\n\n# Regular expression matching correct argument names\nargument-rgx=^[a-z][a-z0-9_]*$\n\n# Regular expression matching correct class attribute names\nclass-attribute-rgx=^(_?[A-Z][A-Z0-9_]*|__[a-z0-9_]+__|_?[a-z][a-z0-9_]*)$\n\n# Regular expression matching correct inline iteration names\ninlinevar-rgx=^[a-z][a-z0-9_]*$\n\n# Regular expression matching correct class names\nclass-rgx=^_?[A-Z][a-zA-Z0-9]*$\n\n# Regular expression matching correct module names\nmodule-rgx=^(_?[a-z][a-z0-9_]*|__init__)$\n\n# Regular expression matching correct method names\nmethod-rgx=(?x)^(?:(?P<exempt>_[a-z0-9_]+__|runTest|setUp|tearDown|setUpTestCase|tearDownTestCase|setupSelf|tearDownClass|setUpClass|(test|assert)_*[A-Z0-9][a-zA-Z0-9_]*|next)|(?P<camel_case>_{0,2}[A-Z][a-zA-Z0-9_]*)|(?P<snake_case>_{0,2}[a-z][a-z0-9_]*))$\n\n# Regular expression which should only match function or class names that do\n# not require a docstring.\nno-docstring-rgx=(__.*__|main|test.*|.*test|.*Test)$\n\n# Minimum line length for functions/classes that require docstrings, shorter\n# ones are exempt.\ndocstring-min-length=12\n\n\n[TYPECHECK]\n\n# List of decorators that produce context managers, such as\n# contextlib.contextmanager. Add to this list to register other decorators that\n# produce valid context managers.\ncontextmanager-decorators=contextlib.contextmanager,contextlib2.contextmanager\n\n# List of module names for which member attributes should not be checked\n# (useful for modules/projects where namespaces are manipulated during runtime\n# and thus existing member attributes cannot be deduced by static analysis. It\n# supports qualified module names, as well as Unix pattern matching.\nignored-modules=\n\n# List of class names for which member attributes should not be checked (useful\n# for classes with dynamically set attributes). This supports the use of\n# qualified names.\nignored-classes=optparse.Values,thread._local,_thread._local\n\n# List of members which are set dynamically and missed by pylint inference\n# system, and so shouldn\'t trigger E1101 when accessed. Python regular\n# expressions are accepted.\ngenerated-members=\n\n\n[FORMAT]\n\n# Maximum number of characters on a single line.\nmax-line-length=80\n\n# TODO(https://github.com/pylint-dev/pylint/issues/3352): Direct pylint to exempt\n# lines made too long by directives to pytype.\n\n# Regexp for a line that is allowed to be longer than the limit.\nignore-long-lines=(?x)(\n  ^\\s*(\\#\\ )?<?https?://\\S+>?$|\n  ^\\s*(from\\s+\\S+\\s+)?import\\s+.+$)\n\n# Allow the body of an if to be on the same line as the test if there is no\n# else.\nsingle-line-if-stmt=yes\n\n# Maximum number of lines in a module\nmax-module-lines=99999\n\n# String used as indentation unit.  The internal Google style guide mandates 2\n# spaces.  Google\'s externaly-published style guide says 4, consistent with\n# PEP 8.  Here, we use 2 spaces, for conformity with many open-sourced Google\n# projects (like TensorFlow).\nindent-string=\'    \'\n\n# Number of spaces of indent required inside a hanging  or continued line.\nindent-after-paren=4\n\n# Expected format of line ending, e.g. empty (any line ending), LF or CRLF.\nexpected-line-ending-format=\n\n\n[MISCELLANEOUS]\n\n# List of note tags to take in consideration, separated by a comma.\nnotes=TODO\n\n\n[STRING]\n\n# This flag controls whether inconsistent-quotes generates a warning when the\n# character used as a quote delimiter is used inconsistently within a module.\ncheck-quote-consistency=yes\n\n\n[VARIABLES]\n\n# Tells whether we should check for unused import in __init__ files.\ninit-import=no\n\n# A regular expression matching the name of dummy variables (i.e. expectedly\n# not used).\ndummy-variables-rgx=^\\*{0,2}(_$|unused_|dummy_)\n\n# List of additional names supposed to be defined in builtins. Remember that\n# you should avoid to define new builtins when possible.\nadditional-builtins=\n\n# List of strings which can identify a callback function by name. A callback\n# name must start or end with one of those strings.\ncallbacks=cb_,_cb\n\n# List of qualified module names which can have objects that can redefine\n# builtins.\nredefining-builtins-modules=six,six.moves,past.builtins,future.builtins,functools\n\n\n[LOGGING]\n\n# Logging modules to check that the string format arguments are in logging\n# function parameter format\nlogging-modules=logging,absl.logging,tensorflow.io.logging\n\n\n[SIMILARITIES]\n\n# Minimum lines number of a similarity.\nmin-similarity-lines=4\n\n# Ignore comments when computing similarities.\nignore-comments=yes\n\n# Ignore docstrings when computing similarities.\nignore-docstrings=yes\n\n# Ignore imports when computing similarities.\nignore-imports=no\n\n\n[SPELLING]\n\n# Spelling dictionary name. Available dictionaries: none. To make it working\n# install python-enchant package.\nspelling-dict=\n\n# List of comma separated words that should not be checked.\nspelling-ignore-words=\n\n# A path to a file that contains private dictionary; one word per line.\nspelling-private-dict-file=\n\n# Tells whether to store unknown words to indicated private dictionary in\n# --spelling-private-dict-file option instead of raising a message.\nspelling-store-unknown-words=no\n\n\n[IMPORTS]\n\n# Deprecated modules which should not be used, separated by a comma\ndeprecated-modules=regsub,\n                   TERMIOS,\n                   Bastion,\n                   rexec,\n                   sets\n\n# Create a graph of every (i.e. internal and external) dependencies in the\n# given file (report RP0402 must not be disabled)\nimport-graph=\n\n# Create a graph of external dependencies in the given file (report RP0402 must\n# not be disabled)\next-import-graph=\n\n# Create a graph of internal dependencies in the given file (report RP0402 must\n# not be disabled)\nint-import-graph=\n\n# Force import order to recognize a module as part of the standard\n# compatibility libraries.\nknown-standard-library=\n\n# Force import order to recognize a module as part of a third party library.\nknown-third-party=enchant, absl\n\n# Analyse import fallback blocks. This can be used to support both Python 2 and\n# 3 compatible code, which means that the block might have code that exists\n# only in one or another interpreter, leading to false positives when analysed.\nanalyse-fallback-blocks=no\n\n\n[CLASSES]\n\n# List of method names used to declare (i.e. assign) instance attributes.\ndefining-attr-methods=__init__,\n                      __new__,\n                      setUp\n\n# List of member names, which should be excluded from the protected access\n# warning.\nexclude-protected=_asdict,\n                  _fields,\n                  _replace,\n                  _source,\n                  _make\n\n# List of valid names for the first argument in a class method.\nvalid-classmethod-first-arg=cls,\n                            class_\n\n# List of valid names for the first argument in a metaclass class method.\nvalid-metaclass-classmethod-first-arg=mcs\n'})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-pylint",children:"How to use Pylint?"}),"\n",(0,s.jsx)(n.h3,{id:"a-using-pylint-outside-the-editor-via-terminal",children:"A) Using pylint outside the editor, via terminal"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Goto your project repo ",(0,s.jsx)(n.code,{children:"cd my-python-project"})]}),"\n",(0,s.jsxs)(n.li,{children:["Activate your project's venv ",(0,s.jsx)(n.code,{children:"source /path-to-your-projects-env/bin/activate"})]}),"\n",(0,s.jsx)(n.li,{children:"Run pylint as"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example of scanning all .py files from current directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pylint *.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example of scanning all files from current directory (.) recursively, ignoring .venv folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pylint --recursive=y --ignore=.venv .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"b-using-pylint-inside-vscode-editor",children:"B) Using pylint inside VSCode editor"}),"\n",(0,s.jsx)(n.h4,{id:"1-install-this-vscode-extension-for-pylint",children:"1) Install this VSCode extension for Pylint"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.pylint",children:"Pylint VSCode Extension"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-vscode-settings-for-pylint",children:"2) VSCode Settings for pylint"}),"\n",(0,s.jsxs)(n.p,{children:["You can edit ",(0,s.jsx)(n.code,{children:"settings.json"})," of VSCode as below"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To run pylint on code change"}),"\n",(0,s.jsx)(n.li,{children:"To always show notifications"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "pylint.lintOnChange": true,\n    "pylint.showNotifications": "always",\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"3-open-any-python-file-in-editor",children:"3) Open any python file in editor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"Problems"})," tab in console, to see  linting errors if any"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4-references",children:"4) References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Read more here ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/python/linting",children:"Linting Python in Visual Studio Code\n"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);