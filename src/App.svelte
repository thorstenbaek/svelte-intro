<script>
	import {marked} from "marked";

	let content = "";
</script>

<textarea bind:value={content}/>

{@html marked(content)}


