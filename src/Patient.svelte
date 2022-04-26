<script>
    export var patient;

    function formatImage(image) {
        return image;
    }
</script>

<img src={formatImage(patient.image)} alt="{patient.lastName}" height="200px" width="200px"/>

<div class="name">
    {patient.firstName} {patient.lastName}    
</div>
<div class="born">
    {new Date(patient.birthDate).toLocaleDateString()}
</div>
<div contenteditable="true">
    {@html patient.description}
</div>

<style>
    .name {
        font-weight: bold;
    }

    .born {
        font-style: italic;
        color: darkred;
    }
</style>
