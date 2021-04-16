<script>
	export let title
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}SvelteKitTemplate</title>
</svelte:head>

<slot></slot>
