<script>
	import Hobby from './Hobby.svelte';
	import Button from './Button.svelte';

	let name = '';
    let weight = 1;
    let description = '';
    let hobbies =[];

    function addHobby(){
        const newBook = {
            name : name,
            weight : weight,
            description: description
        };
        hobbies = hobbies.concat(newBook)
    }
</script>

<main>
	<h1>Welcome to the Hobby Land</h1>
	<h2>A Svelte Project Showcase</h2>

	<section>
		<div> 
			<label for="name"></label>
			<input type="text" id="name" bind:value={name} placeholder="What's your Hobby?"/>
		</div>
		<div>
			<label for="description"></label>
			<textarea rows="3" cols="35" id="description" bind:value ={description}  placeholder="Tell us a bit more about it"/>
		</div>
		<div>
			<label for="weight">Do you love doing it?(1 - Least to 10 - Most)</label>
			<input type="range" min="1" max="10" id="weight" bind:value={weight} />
			<p>{weight}</p>
		</div>
		<Button on:click={addHobby}>Track It</Button>
	</section>

	{#if hobbies.length === 0}
		<p>
			No Hobbies? Oh dear, please add one. 
		</p>
	{:else}
		{#each hobbies as hobby}
			<Hobby name={hobby.name} weight={hobby.weight} description={hobby.description}/>
		{/each}
	{/if}

	<footer>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		margin: 0.5rem;
	}

	input[type="range"] {
		padding: 0;
		margin-top: 0.4em;
		width: 200px;
	}
	input[type="text"] {
		width: 282px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>