<script lang="ts">
	export let from: number | undefined
	const to = (new Date()).getUTCFullYear()
</script>

{(!from || to <= from) ? to.toString() : `${from}-${to}`}
