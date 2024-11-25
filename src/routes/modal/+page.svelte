<script>
	import '../../app.css';
	let showModal = false;
	const handleClick = () => {
		showModal = !showModal;
	};
</script>

<main>
	<div>
		<button class=" btn btn-primary" onclick={handleClick}>Modal</button>
		<dialog open={showModal} class="fixed inset-0 bg-black p-7 opacity-5">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Officiis, atque id.
				Voluptates quaerat ullam amet quas saepe distinctio suscipit quidem ad commodi accusantium
				eligendi ut, deleniti soluta officiis.
			</p>
			<button class="btn btn-primary" onclick={handleClick}>close modal</button>
		</dialog>
	</div>
</main>
