<script>
    import {hours} from "./stores.js";
</script>

<button on:click={() => hours.update(g => g - 1)}>Decrease hours</button>
    