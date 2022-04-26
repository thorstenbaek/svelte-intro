<script>
	import Inner from "./Inner.svelte";

	let m = {
		clientX: 0,
		clientY: 0
	};

	function handleMyEvent(e) {
		m = e.detail;
	}
</script>

<Inner on:myevent={handleMyEvent}/>

<div>
	{m.clientX} x {m.clientY}
</div>