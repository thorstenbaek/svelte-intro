<script>
    export var patient;

    function formatImage(image) {
        return image;
    }
</script>

<img src={formatImage(patient.image)} alt="{patient.lastName}" height="200px" width="200px"/>

<div class="name">
    {patient.name[0].given[0]} {patient.name[0].family}    
</div>
<div class="born">
    {new Date(patient.birthDate).toLocaleDateString("nb-NO")}
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
