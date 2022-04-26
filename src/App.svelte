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

	async function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function LoadUserData() {
		await sleep(1000);

		var response = await fetch('https://api.github.com/users/thorstenbaek');
		var json = await response.json();
		
		console.log(json);
		return json;				
	}
	
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

<h2>Await</h2>
{#await LoadUserData()}
	Loading github user...
{:then user}
	<div>
		<img src={user.avatar_url} alt="avatar"/>
		{user.html_url}
	</div>
{:catch error}
	<div>
		Error: {error}
	</div>
{/await}
	

