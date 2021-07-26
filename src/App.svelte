<script>
	import Hobby from './Hobby.svelte';
	import Button from './Button.svelte';

	import { saveToLS, readFromLS } from './storage';

	let name = '';
    let weight = 1;
    let description = '';
    let hobbies = JSON.parse(readFromLS('hobbies')) || [];
	console.log(hobbies);

	const getHobbyLook = (weight) => {
		let background = '#ff6b6b';
		let color = '#FFFFFF';

		if (weight > 3 && weight <= 6) {
			background = '#efef04';
			color = '#000';
		} else if (weight > 6) {
			background = '#0eb30e';
			color = '#FFFFFF';
		}

		return {background: background, color: color};
	}

    const addHobby = () => {
		const look = getHobbyLook(weight);
        const newBook = {
            name : name,
            weight : weight,
            description: description,
			look: look
        };
        hobbies = hobbies.concat(newBook);
		saveToLS('hobbies', hobbies);
    }

	const deleteHobby = name => {
		console.log('hobby to delete', name);
		//find hobby by name
		let index = hobbies.findIndex(hobby => hobby.name === name);
		//remove hobby
		hobbies.splice(index, 1);
		hobbies = [...hobbies];
		console.log('hobbies after delete', hobbies);
		saveToLS('hobbies', hobbies);
	};
</script>

<main>
	<h1>Welcome to the Hobby Land</h1>
	<h2>Track Your Hobbies to Get Better</h2>

	<section>
		<div> 
			<label for="name"></label>
			<input type="text" id="name" bind:value={name} placeholder="What's your Hobby?"/>
		</div>
		<div>
			<label for="description"></label>
			<textarea rows="3" cols="35" id="description" bind:value ={description}  placeholder="Tell us a bit more about it"/>
		</div>
		<div class="weight-div">
			<label for="weight">How serious are you about it?(1 - Least to 10 - Most)</label>
			<input type="range" min="1" max="10" id="weight" bind:value={weight} />
			<p style="background-color: {getHobbyLook(weight).background}; color: {getHobbyLook(weight).color};">{weight}</p>
		</div>
		<Button on:click={addHobby}>Add Hobby</Button>
	</section>
	<hr />
	<div class="hobby-list">
		{#if hobbies.length === 0}
			<p class="no-hobby">
				No Hobbies? Oh dear, please add one to track. 
			</p>
		{:else}
			{#each hobbies as hobby}
				<Hobby 
					name={hobby.name} 
					weight={hobby.weight} 
					description={hobby.description} 
					look={hobby.look}
					deleteHobby={deleteHobby} />
			{/each}
		{/if}
	</div>
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

	.hobby-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.no-hobby {
		padding: 1em;
    	border: 1px solid;
    	border-radius: 4px;
    	background-color: #ebebeb;
	}

	.weight-div {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.weight-div p {
		width: 2rem;
		height: 2rem;
		border: 1px solid #000;
		border-radius: 29px;
		padding: 1rem;
		font-size: 1.5rem;
	}

	input[type="range"] {
		padding: 0;
		margin-top: 0.4em;
		width: 200px;
	}
	input[type="text"] {
		width: 277px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>