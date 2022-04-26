<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function dispatchMouseMove(e){
        dispatch('myevent', {
            clientX: e.clientX,
            clientY: e.clientY
        });
    }
</script>

<div on:mousemove={dispatchMouseMove}/>

<style>
	div {
		background-color: darkcyan;
		width: 640px;
		height: 480px;
		padding: 5px;
	}
</style>

