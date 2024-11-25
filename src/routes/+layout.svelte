<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<main class="h-dvh w-full flex justify-center items-center">
	{@render children()}
</main>

