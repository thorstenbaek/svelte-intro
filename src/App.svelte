<script>
	let patient = {
		firstName: "Thor",
		lastName: "Stenbæk"
	}

	let fullName = "";

	$: fullName = patient.firstName + " " + patient.lastName
</script>


<label>
	Firstname:
	<input type="text" bind:value={patient.firstName}/>
</label>
<label>
	Lastname:
	<input type="text" bind:value={patient.lastName}/>
</label>

<p>
	Fullname: {fullName}
</p>

<style>
	label {
		display: flex;
	}
</style>