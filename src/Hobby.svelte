<script>
    export let id;
    export let name;
    export let description;
    export let weight;
    export let look = {background: '#fff', color: '#000'};
    export let deleteHobby;
    export let editMode;
</script>

<div class="hobby" style="background-color: {look.background}; color: {look.color};">
    <div class="actions">
        <span on:click={() => editMode(name)}>E</span>
        <span on:click={() => deleteHobby(name)}>X</span>
    </div>
    <span hidden>{id}</span>
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{weight}</span>
</div>


<style>
    h3 {
        margin: 0;
        padding: 0;
		font-size: 2em;
		font-weight: 100;
	}

    .hobby {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ececec;
        border-radius: .5rem;
    }

    .actions {
        margin: 0 0 1rem 0;
        float: right;
    }

    .actions span {
        padding: 0 0 0 .5rem;
        cursor: pointer;
    }
</style>