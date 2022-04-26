<script>
    import {global} from "./stores.js";
</script>

<button on:click={() => global.update(g => g + 1)}>Increase global</button>
    