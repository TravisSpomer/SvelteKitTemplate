const { mdsvex } = require("mdsvex")
const sveltePreprocess = require("svelte-preprocess")
const adapterStatic = require("@sveltejs/adapter-static")
const pkg = require("./package.json")
const mdsvexConfig = require("./mdsvex.config.cjs")

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: [
		".svelte", ...mdsvexConfig.extensions,
	],
	preprocess: [
		mdsvex(mdsvexConfig),
		sveltePreprocess(),
	],
	kit: {
		adapter: adapterStatic(),
		paths: {
			base: process.env.BASE_URL || "",
		},
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			}
		}
	}
}
