<script>
	var array = [1, 2, 3];
	var sum = 0;

	$: {
		sum = array.reduce((acc, cur) => acc + cur, 0);
	}

	function buttonClicked() {
		array.push(array.length + 1);		
	}
</script>

<button on:click={buttonClicked}>
	Click me!
</button>

<div>
	Array contains: {array.join(' + ')} = {sum} 
</div>