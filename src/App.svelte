<script>
	var count = 0;
	var doubled = 0;

	$:  {
		doubled = count * 2;
		console.log("count was changed");
	}

	function buttonClicked() {
		count++;	
	}
</script>

<button on:click={buttonClicked}>
	Click me!
</button>

<div>
	Button was clicked {count} times	
</div>
<div>
	Count doubled is {doubled}
</div>