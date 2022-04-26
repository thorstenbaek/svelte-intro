<script>
	import DisplayPanel from './DisplayPanel.svelte';
	import DecreasePanel from './DecreasePanel.svelte';
	import IncreasePanel from './IncreasePanel.svelte';
	import {global} from "./stores.js";	
</script>


<DecreasePanel/> {$global} <IncreasePanel/>
<DisplayPanel/>



