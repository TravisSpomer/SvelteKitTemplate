module.exports = {
	"extends": ["eslint:recommended", "plugin:svelte/recommended"],
	"ignorePatterns": ["build/", "node_modules/"],
	"env": {
		"browser": true,
		"es2017": true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 2020,
		"extraFileExtensions": [".svelte"]
	},
	"plugins": ["@typescript-eslint"],
	"overrides": [
		{
			"files": ["*.svelte"],
			"parser": "svelte-eslint-parser",
			"parserOptions": {
				"parser": "@typescript-eslint/parser"
			}
		}
	],
	"rules": {
		"brace-style": ["warn", "allman"],
		"block-spacing": ["warn", "always"],
		"comma-dangle": ["warn", {
			"arrays": "only-multiline",
			"objects": "only-multiline",
			"imports": "only-multiline",
			"exports": "only-multiline",
			"functions": "never"
		}],
		"comma-style": ["warn", "last"],
		"dot-notation": "warn",
		"eqeqeq": ["error", "always"],
		"func-call-spacing": ["warn", "never"],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"lines-between-class-members": ["warn", "always", { "exceptAfterSingleLine": true }],
		"no-cond-assign": ["error", "always"],
		"no-console": "off",
		"no-multi-spaces": "warn",
		"no-prototype-builtins": "off",
		"no-shadow": "off",
		"no-trailing-spaces": "warn",
		"no-unused-vars": "off",
		"no-var": "error",
		"object-curly-spacing": ["warn", "always"],
		"padded-blocks": ["warn", "never"],
		"prefer-const": "warn",
		"prefer-rest-params": "warn",
		"quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
		"semi": ["warn", "never"],
		"space-infix-ops": "error",
		"spaced-comment": ["warn", "always", {
			"line": {
				"markers": ["/"]
			},
			"block": {
				"balanced": true
			}
		}],
		"yoda": ["warn", "never"],
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
		"@typescript-eslint/no-var-requires": "off",
	}
}
