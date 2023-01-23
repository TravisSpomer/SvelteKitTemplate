<script lang="ts">
	import { page } from "$app/stores"

	let title: string
	let message: string

	switch ($page.status)
	{
		case 404:
			title = "Not found"
			message = "Sorry, that page wasn’t found."
			break
		default:
			title = "Oops"
			message = "Sorry, something went wrong."
	}
</script>

<svelte:head>
	<title>{title} - SvelteKitTemplate</title>
</svelte:head>

<h1>{title}</h1>
<p>
	{message}
</p>
