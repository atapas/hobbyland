<script>
    export let name;
    export let description;
    export let weight;
    export let look = {background: '#fff', color: '#000'};
    export let deleteHobby;
</script>

<div style="background-color: {look.background}; color: {look.color};">
    <span class="close" on:click={() => deleteHobby(name)}>X</span>
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

    div {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ececec;
    }

    .close {
        float: right;
        cursor: pointer;
    }
</style>