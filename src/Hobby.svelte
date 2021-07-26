<script>
    import { EditIcon, XCircleIcon, ThumbsUpIcon } from 'svelte-feather-icons';
    export let hobby = {
        id: '', 
        name: '', 
        description: '',
        weight: '',
        look: {
            background: '', 
            color: ''
        }
    }
    export let deleteHobby;
    export let editMode;
</script>

<div class="hobby" style="background-color: {hobby.look.background}; color: {hobby.look.color};">
    <div class="actions">
        <span on:click={() => editMode(hobby.name)}><EditIcon size="24" /></span>
        <span on:click={() => deleteHobby(hobby.name)}><XCircleIcon size="24" /></span>
    </div>
    <span hidden>{hobby.id}</span>
    <h3><b>{hobby.name}</b></h3>
    <p>{hobby.description}</p>
    <div>
        {#each new Array(hobby.weight) as index}
            <span class="weight"><ThumbsUpIcon size="24" /></span>
        {/each}
    </div>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .actions {
        justify-content: flex-end;
        display: flex;
    }

    .actions span {
        padding: 0 0 0 .5rem;
        cursor: pointer;
    }

    .weight {
        margin-right: 0.2rem;
    }
</style>