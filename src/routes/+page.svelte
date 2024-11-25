<script lang="ts">
	import ComponentB from '$lib/components/component-B.svelte';
	import { setContext } from '$lib/components/context-at-home';

	let fruit = $state({ apple: '🍎' });
	setContext('key', fruit);
</script>

<!-- <ComponentB {fruit}/> -->
<ComponentB />
