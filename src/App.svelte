<script>
	import { onMount } from 'svelte';

	import Hobby from './Hobby.svelte';
	import Button from './Button.svelte';

	import { saveToLS, readFromLS } from './storage';
	import { generate } from 'shortid';

	let id;
	let name = '';
    let weight = 3;
    let description = '';
    let hobbies = JSON.parse(readFromLS('hobbies')) || [];
	let isEditMode = false;
	let elmToFocus;
	console.log(hobbies);

	onMount(function() {
        elmToFocus.focus();
    });

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
		
		if (isEditMode) {
			editHobby(id, name, weight, description, look);
			
		} else {
			const hobby = {
				id: generate(),
				name : name,
				weight : weight,
				description: description,
				look: look
			};
			hobbies = hobbies.concat(hobby);
			resetAndSave(hobbies);
		}
    }

	const deleteHobby = name => {
		console.log('hobby to delete', name);
		//find hobby by name
		let index = hobbies.findIndex(hobby => hobby.name === name);
		//remove hobby
		hobbies.splice(index, 1);
		hobbies = [...hobbies];
		console.log('hobbies after delete', hobbies);
		resetAndSave(hobbies);
	};

	const editHobby = (id, newName, newWeight, newDescription, newLook) => {
		console.log('hobby to edit', name);
		//find hobby by name
		let index = hobbies.findIndex(hobby => hobby.id === id);
		//edit hobby
		hobbies[index].name = newName;
		hobbies[index].weight = newWeight;
		hobbies[index].description = newDescription;
		hobbies[index].look = newLook;
		hobbies = [...hobbies];
		console.log('hobbies after edit', hobbies);
		resetAndSave(hobbies);
	};

	const editMode = (hobbyId) => {
		console.log('hobby to edit', name);
		//find hobby by name
		let hobby = hobbies.find(hobby => hobby.id === hobbyId);
		id = hobby.id;
		name = hobby.name;
		weight = hobby.weight;
		description = hobby.description;
		isEditMode = true;
	}
	const reset = () => {
		id = '';
		name = '';
		weight = 3;
		description = '';
		isEditMode = false;
	}

	const resetAndSave = hobbies => {
		reset();
		saveToLS('hobbies', hobbies);
	}
</script>

<main>
	<h1>Welcome to the Hobby Land</h1>
	<div class="container">
		<div class="hobby-form">
			<div> 
				<label for="name"></label>
				<input type="text" id="name" bind:value={name} placeholder="What's your Hobby?" bind:this={elmToFocus} />
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
			{#if isEditMode}
				<Button on:click={reset} negative={true}>Cancel</Button>
				<Button on:click={addHobby}>Edit Hobby</Button>
			{:else}
				<Button on:click={addHobby} isDisabled={name.trim().length === 0}>Add Hobby</Button>
			{/if}
		</div>
		<div>
			<h2>Hobbies</h2>
			<h3>Track Your Hobbies to Get Better</h3>
			<div class="hobby-list">
				{#if hobbies.length === 0}
					<p class="no-hobby">
						No Hobbies? Oh dear, please add one to track. 
					</p>
				{:else}
					{#each hobbies as hobby}
						<Hobby
							hobby={hobby}
							deleteHobby={deleteHobby} 
							editMode = {() => editMode(hobby.id)} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<footer>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
	}

	p {
		margin: 0.5rem;
	}

	textarea { 
		width: 100%;
	}

	.container {
		display: flex;
		justify-content: space-around;
		margin: 1rem auto auto auto;
	}

	@media screen and (max-width: 720px) {
		.container {
			flex-direction: column;
		}
	}

	.hobby-form {
		padding: 1rem;
		background-color: #ebebeb;
		max-height: 381px;
    	min-width: 320px;
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
		width: 100%;
	}
	input[type="text"] {
		width: 100%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
</style>