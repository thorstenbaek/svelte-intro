<script>
	import Patient from './Patient.svelte';	

	const patient = {
		name: [{
			text: "Stenbæk, Thor",
			family: "Stenbæk",
			given: ["Thor"],
			
		}],
		gender: "male",
		birthDate: "1973-10-15",
		image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
		description: "<b>Thor</b> is a <i>fictional superhero</i> appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and writer Jack Kirby, the character first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) and then appeared in over sixty more comic books published by Marvel Comics, with twelve new titles. The character is a founding member of the <b>Avengers</b>."
	};
</script>

<main>
	<h1>Patient</h1>

	
	<Patient {patient}/>
</main>

