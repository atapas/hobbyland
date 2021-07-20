<script>
    export let name;
    export let description;
    export let weight;
</script>

<div>
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
</style>