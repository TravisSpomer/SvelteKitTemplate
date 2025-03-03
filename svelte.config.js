import { mdsvex } from "mdsvex"
import adapterStatic from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import mdsvexConfig from "./mdsvex.config.cjs"

/** @type {import('@sveltejs/kit').Config} */
export default {

	extensions: [
		".svelte", ...mdsvexConfig.extensions,
	],

	preprocess: [
		mdsvex(mdsvexConfig),
		vitePreprocess(),
	],

	kit: {
		adapter: adapterStatic(),
		paths: {
			base: process.env.BASE_URL || "",
		},
	},

}
