<script context="module" lang="ts">
import type { ErrorLoad, ErrorLoadInput } from "@sveltejs/kit/types/page"

// eslint-disable-next-line no-shadow
export function load(input: ErrorLoadInput): ReturnType<ErrorLoad>
{
	switch (input.status)
	{
		case 404: return { props: { title: "Not found", message: "Sorry, that page wasn’t found." } }
		default: return { props: { title: "Oops", message: "Sorry, something went wrong.", error: input.error } }
	}
}
</script>

<script lang="ts">
	export let title: string
	export let message: string
	export let error: Error | undefined
</script>

<svelte:head>
	<title>{title} - SvelteKitTemplate</title>
</svelte:head>

<h1>{title}</h1>
<p>
	{message}
</p>
{#if error}
<details style="margin-top: 4em;">
	<summary>
		Technical details
	</summary>
	<h3>
		{error.name}: {error.message}
	</h3>
	{#if "stack" in error}
	<pre>
		{error.stack}
	</pre>
	{/if}
</details>
{/if}