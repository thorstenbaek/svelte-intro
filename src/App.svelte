<script>
	import DisplayPanel from './DisplayPanel.svelte';
	import DecreasePanel from './DecreasePanel.svelte';
	import IncreasePanel from './IncreasePanel.svelte';
	import {hours, time, nextTime} from "./stores.js";	
</script>


<DecreasePanel/> {$hours} <IncreasePanel/>
<DisplayPanel/>

<div>
	Current time: <br/>
	{$time.toLocaleDateString("nb-no")} {$time.toLocaleTimeString("nb-no")}
</div>

<div>
	Next time: <br/>
	{$nextTime.toLocaleDateString("nb-no")} {$nextTime.toLocaleTimeString("nb-no")}
</div>



