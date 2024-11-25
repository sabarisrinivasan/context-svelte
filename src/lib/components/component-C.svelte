<script>
	import { getContext } from './context-at-home';

	// let { fruit } = $props();
	const props = getContext('key');
</script>

<div
	class="flex h-[50%] w-[50%] items-center justify-center rounded border-2 border-white bg-gray-700"
>
	<h1>{JSON.stringify(props, null, 2)}</h1>
</div>
