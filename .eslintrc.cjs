module.exports = {
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	"ignorePatterns": ["build/", "node_modules/"],
	"env": {
		"browser": true,
		"es2017": true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": ["svelte3", "@typescript-eslint"],
	"overrides": [
		{
			"files": ["*.svelte"],
			"processor": "svelte3/svelte3"
		}
	],
	"settings": {
		"svelte3/typescript": require("typescript")
	},
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
		"no-shadow": "off", // This rule seems very buggy
		"no-trailing-spaces": "warn",
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
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars-experimental": "warn",
		"@typescript-eslint/no-var-requires": "off",
	}
}