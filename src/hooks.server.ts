import { dev } from "$app/environment"
import { minify } from "html-minifier"
import type { Options } from "html-minifier"
import type { Handle } from "@sveltejs/kit"

const minifierOptions: Options =
{
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	preserveLineBreaks: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
}

export async function handle({ event, resolve }: Parameters<Handle>[0]): Promise<Response>
{
	const response = await resolve(event)

	// Minify all HTML outputs in production builds.
	// IMPORTANT: If you use this template for a non-static site, you should probably only do this when prerendering.
	//     import { prerendering } from "$app/environment"
	//     ...and then add "prerendering &&" to the condition below.
	// Note that prerendering is false when using "npm run serve" ("svelte-kit preview").
	if (!dev && response.headers && response.body && response.headers.get("content-type") === "text/html")
		return new Response(minify((await response.text()), minifierOptions), response)

	return response
}
