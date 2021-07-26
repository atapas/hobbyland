<script>
    import { EditIcon, XCircleIcon, ThumbsUpIcon } from 'svelte-feather-icons';

    export let id;
    export let name;
    export let description;
    export let weight;
    export let look = {background: '#fff', color: '#000'};
    export let deleteHobby;
    export let editMode;

    const getWeightSymbols = weight => {
        let arr = [];
        arr.length = weight;
        return arr;
    }

    let weightArray = getWeightSymbols(weight);
</script>

<div class="hobby" style="background-color: {look.background}; color: {look.color};">
    <div class="actions">
        <span on:click={() => editMode(name)}><EditIcon size="24" /></span>
        <span on:click={() => deleteHobby(name)}><XCircleIcon size="24" /></span>
    </div>
    <span hidden>{id}</span>
    <h3><b>{name}</b></h3>
    <p>{description}</p>
    {#each weightArray as index}
        <span class="weight"><ThumbsUpIcon size="24" /></span>
    {/each}
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
        width: 20rem;
    }

    .actions {
        margin: 0 0 1rem 0;
        float: right;
    }

    .actions span {
        padding: 0 0 0 .5rem;
        cursor: pointer;
    }

    .weight {
        margin-right: 0.2rem;
    }
</style>