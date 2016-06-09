"use strict";

module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "jquery": true
    },

    "extends": "eslint:recommended",

    // http://eslint.org/docs/rules/
    "rules": {
        // Possible Errors
        "comma-dangle": ["error", "never"],
        "no-cond-assign": ["error", "always"],
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "valid-jsdoc": ["warn", {
            "prefer": {
                "arg": "param",
                "argument": "param",
                "return": "returns",
                "class": "constructor",
                "exception": "throws"
            },
            "requireParamDescription": false,
            "requireReturn": false,
            "requireReturnDescription": false
        }],
        "valid-typeof": "error",

        // Best Practices
        "accessor-pairs": "warn",
        "block-scoped-var": "error",
        "complexity": ["warn", 10],
        "consistent-return": "error",
        "curly": ["error", "all"],
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-div-regex": "warn",
        "no-else-return": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "warn",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": "error",
        "no-process-env": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": ["error", "always"],
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-with": "error",
        "radix": "error",
        "vars-on-top": "warn",
        "wrap-iife": ["error", "outside"],
        "yoda": ["error", "never"],

        // Variables
        "init-declarations": "off",
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "error",
        "no-undef-init": "error",
        "no-undef": "error",
        "no-undefined": "error",
        "no-unused-vars": "error",
        "no-use-before-define": ["error", {"functions": false}],

        // Node.js and CommonJS
        "callback-return": ["error", ["callback", "cb", "next", "done"]],
        "global-require": "error",
        "handle-callback-err": ["error", "^(err|error)$"],
        "no-mixed-requires": "off",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-restricted-modules": "error",
        "no-sync": "error",

        // Stylistic Issues
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "camelcase": ["error", {"properties": "always"}],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error", "self"],
        "eol-last": "error",
        "func-names": "off",
        "func-style": ["error", "declaration", {"allowArrowFunctions": true}],
        "id-length": "off",
        "id-match": "off",
        "indent": ["error", 4, {"SwitchCase": 1, "VariableDeclarator": 0}],
        "jsx-quotes": "off",
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": ["off", {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "beforeLineComment": true,
            "afterLineComment": false
        }],
        "max-depth": ["error", 4],
        "max-len": ["warn", 150, 2],
        "max-nested-callbacks": ["warn", 4],
        "max-params": "off",
        "max-statements": ["error", 30],
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": "off",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "error",
        "no-restricted-syntax": "off",
        "no-spaced-func": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": ["error", {"defaultAssignment": true}],
        "object-curly-spacing": ["error", "always"],
        "one-var": "off",
        "operator-assignment": "off",
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent"],
        "quotes": ["error", "single", "avoid-escape"],
        "require-jsdoc": "warn",
        "semi-spacing": ["error", {"before": false, "after": true}],
        "semi": ["error", "always"],
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error", {"int32Hint": true}],
        "space-unary-ops": ["error", {"words": true, "nonwords": false}],
        "spaced-comment": ["off", "never"],
        "wrap-regex": "off",

        // ES6
        // require braces around arrow function bodies
        "arrow-body-style": ["error", "as-needed"],

        // require parentheses around arrow function arguments
        "arrow-parens": ["error", "always"],

        // enforce consistent spacing before and after the arrow in arrow functions
        "arrow-spacing": ["error", {"before": true, "after": true}],

        // require super() calls in constructors
        "constructor-super": "error",

        // enforce consistent spacing around * operators in generator functions
        "generator-star-spacing": ["error", {"before": false, "after": true}],

        // disallow reassigning class members
        "no-class-assign": "error",

        // disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": "error",

        // disallow reassigning const variables
        "no-const-assign": "error",

        // disallow duplicate class members
        "no-dupe-class-members": "error",

        // disallow duplicate module imports
        "no-duplicate-imports": "error",

        // disallow new operators with the Symbol object
        "no-new-symbol": "error",

        // disallow specified modules when loaded by import
        "no-restricted-imports": "off",

        // disallow this/super before calling super() in constructors
        "no-this-before-super": "error",

        // disallow unnecessary computed property keys in object literals
        "no-useless-computed-key": "error",

        // disallow unnecessary constructors
        "no-useless-constructor": "off",

        // require let or const instead of var
        "no-var": "error",

        // require or disallow method and property shorthand syntax for object literals
        "object-shorthand": "off",

        // require arrow functions as callbacks
        "prefer-arrow-callback": "off",

        // require const declarations for variables that are never reassigned after declared
        "prefer-const": "warn",

        // require Reflect methods where applicable
        "prefer-reflect": "warn",

        // require rest parameters instead of arguments
        "prefer-rest-params": "warn",

        // require spread operators instead of .apply()
        "prefer-spread": "warn",

        // require template literals instead of string concatenation
        "prefer-template": "off",

        // require generator functions to contain yield
        "require-yield": "warn",

        // enforce sorted import declarations within modules
        "sort-imports": "error",

        // require or disallow spacing around embedded expressions of template strings
        "template-curly-spacing": ["error", "never"],

        // require or disallow spacing around the * in yield* expressions
        "yield-star-spacing": "error"
    }
};
