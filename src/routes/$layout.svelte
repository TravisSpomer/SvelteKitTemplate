<script lang="ts">
	import "../app.scss"
	import Year from "$lib/components/Year.svelte"

	let isExpanded = false

	function toggleHeader()
	{
		isExpanded = !isExpanded
		if (isExpanded && document.activeElement && "blur" in document.activeElement)
			(document.activeElement as any).blur()
	}
</script>

<svelte:head>

</svelte:head>

<header aria-expanded={isExpanded} tabindex="-1">
<div><nav>
	<a href="#top" class="skip-to-content">Skip to content</a>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
	<div tabindex="-1" class="expander" onclick={toggleHeader}>
		<svg width="48" height="48" fill="black">
			<path d="M14,17h20m0,7h-20m0,7h20" />
		</svg>
	</div>
</nav></div>
</header>

<main id="top">
<div class="content">
<slot></slot>
</div>
</main>

<footer>
<p>
	Template &copy; <Year from={2020} /> Travis Spomer.
</p>
</footer>
