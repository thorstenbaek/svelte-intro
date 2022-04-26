<script>
	var isHidden = false;

	var toDos = [
		{
			id: 1,
			title: 'Learn Svelte',
			completed: false
		},
		{
			id: 2,
			title: 'Build an app',
			completed: false
		},
		{
			id: 3,
			title: 'Deploy it to the web',
			completed: false
		}
	];
	
</script>

<h2>if else</h2>
<button on:click={() => isHidden = !isHidden}>
	Hit me!
</button>

<div>Some information goes here...</div>
{#if !isHidden}
	<div>I want to hide this when the button is hit</div>
{:else}
	<div>This is displayed when everything else is hidden</div>
{/if}

<h2>each</h2>
<p>
{#each toDos as toDo, i}
	<div>
		<input type="checkbox" value={toDo.completed}/> {i + 1}. {toDo.title}
	</div>
{/each}
</p>

