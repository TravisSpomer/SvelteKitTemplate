import { minify, Options } from "html-minifier"
import type { ServerRequest, ServerResponse } from "@sveltejs/kit/types/endpoint"

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

export async function handle({ request, render }: { request: ServerRequest, render: ((request: ServerRequest) => Promise<ServerResponse>)}): Promise<ServerResponse>
{
	const response = await render(request)

	// Minify all HTML outputs.
	// IMPORTANT: If you use this template for a non-static site, you should probably only do this when prerendering.
	//     import { prerendering } from "$app/env"
	//     ...and then add "prerendering &&" to the condition below.
	// Note that prerendering is false when using "npm run serve" ("svelte-kit preview").
	if (response.headers && response.headers["content-type"] === "text/html")
		response.body = minify(response.body, minifierOptions)

	return response
}
