<script>
	import Patient from './Patient.svelte';	

	export let name;

	const patient = {
		firstName: "Thor",
		lastName: "Stenbæk",
		birthDate: "1973.10.15",
		image: "https://www.w3schools.com/howto/img_avatar.png",
		description: "<b>Thor</b> is a <i>fictional superhero</i> appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and writer Jack Kirby, the character first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) and then appeared in over sixty more comic books published by Marvel Comics, with twelve new titles. The character is a founding member of the <b>Avengers</b>."
	};
</script>

<main>
	<h1>Patient</h1>

	
	<Patient patient={patient}/>
</main>

