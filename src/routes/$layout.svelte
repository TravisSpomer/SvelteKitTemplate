<script lang="ts">
	import "../app.scss"
	import Year from "$lib/components/Year.svelte"
</script>

<svelte:head>

</svelte:head>

<header>
<div><nav>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav></div>
</header>

<main>
<div class="content">
<slot></slot>
</div>
</main>

<footer>
<p>
	Template &copy; <Year from={2020} /> Travis Spomer.
</p>
</footer>
