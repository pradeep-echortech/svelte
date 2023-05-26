<script>
	import New from "./components/new.svelte";
	// export let name;
	// let bold = "<b>PRADEEP</b>"
	// const status = 'danger'
	// const isPromoted = true
	// let count = 0
	// const num = 5

	// let fullnames = [
	// 	{first:'meher',last:'pradeep'},
	// 	{first:'durga',last:'prasad'},
	// 	{first:'ravi',last:'teja'},
	// ]

	// let handleClick = function(stepsize=1){
	// 	count +=  stepsize
	// }

	import Greet from "./components/new.svelte";

	// let formValues = {
	// 	name : '',
	// 	profileSummary : '',
	// 	country : '',
	// 	skillSet : [],
	// 	gender:[]
	// }
	// function submitForm() {
	// 	localStorage.setItem('Details',JSON.stringify( formValues));
	// }

	import ComponentA from "./components/componentA.svelte";
	// import {setContext} from 'svelte'
	// const userName = 'Meher'
	// setContext('username-context',userName)

	// let showPopup = false
	// function closePopup(event) {
	// 	showPopup = false
	// 	console.log(event.detail);
	// }

	// function handleGreet(event) {
	// 	alert(event.detail)
	// }

	import Card from "./components/Card.svelte";
	import ComponentB from "./components/componentB.svelte";
	import ComponentC from "./components/componentC.svelte";
	import Router from 'svelte-spa-router'
	let activeTab = ComponentA
	let routes = {
		'/': Greet,
		'/componenta': ComponentA,
		'/componentb': ComponentB,
		'/card': Card,
		'*': ComponentC,
	}
</script>

<main>
	<nav>
		<a href="#/">Home</a>
		<a href="#/componenta">About</a>
		<a href="#/componentb">Gallery</a>
		<a href="#/card">Card</a>
	</nav>
	<Router {routes}/>
	<!-- <button on:click={()=>(activeTab = ComponentA)}>Tab A</button>
	<button on:click={()=>(activeTab = ComponentB)}>Tab B</button>
	<button on:click={()=>(activeTab = ComponentC)}>Tab C</button>
	<svelte:component this={activeTab} /> -->
	
	<!-- <Card>
		<h3 slot="hero" let:firstname let:lastname>
			{firstname} {lastname}
		</h3>
	</Card>
	<Card>
		<h3 slot="hero" let:firstname let:lastname>
			{lastname} {firstname}
		</h3>		
	</Card>
	<Card>
		<div slot="header">
			<h3>Header</h3>
		</div>
		<div slot="content">
			<img src="https://picsum.photos/200" alt="">
		</div>
		<div slot="footer">
			<button>View Details</button>
		</div>
	</Card> -->

	<!-- <ComponentA on:greet={handleGreet}/> -->

	<!-- <button on:click={()=>(showPopup=true)}>Show Popup</button>
		{#if showPopup}
		<ComponentA on:close={closePopup}/>
		{/if} -->

	<!-- {#if num === 0 }
	<h1>the number is zero</h1>
	{:else if num < 0}
	<h1>the number is negative</h1>
	{:else if num > 0}
	<h1>the number is positive</h1>
	{:else}
	<h1>It is not a number</h1>
	{/if}
	<div>{@html bold}</div>
	<h2 class={status}>status</h2>
	<h2 class={isPromoted? 'promoted':' '}>Movie Title</h2> -->

	<!-- <h2>App component username- {userName}</h2> -->

	<!-- {#each fullnames as name,index}
		<h2>{index + 1} {name.first} {name.last}</h2>
	{/each} -->

	<!-- <button on:click={()=>(count+=1)}>Count {count}</button> -->
	<!-- <button on:click={()=>handleClick(5)}>Count {count}</button> -->

	<!-- <div>
		<pre>
			{JSON.stringify(formValues, null,2)}
		</pre>
	</div> -->

	<!-- <form on:submit|preventDefault={submitForm}>
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" bind:value = {formValues.name}>
		</div>
		<div>
			<label for="profileSummary">Profile Summary:</label>
			<textarea id="profileSummary" bind:value={formValues.profileSummary}></textarea>
		</div>
		<div>
			<label for="country">country:</label>
			<select id="country" bind:value={formValues.country}>
				<option value="">Select a country</option>
				<option value="india">india</option>
				<option value="australia">australia</option>
				<option value="america">america</option>
			</select>
		</div>
		<div>
			<label for="">Skill-Set:</label>
			<input type="checkbox" id="html" value="html" bind:group={formValues.skillSet}>
			<label for="html">HTML</label>
			<input type="checkbox" id="css" value="css" bind:group={formValues.skillSet}>
			<label for="html">CSS</label>
			<input type="checkbox" id="javascript" value="javascript" bind:group={formValues.skillSet}>
			<label for="html">JavaScript</label>
		</div>
		<div>
			<label for="">Gender:</label>
			<input type="radio"  id="male" value="male" bind:group={formValues.gender}>
			<label for="male">Male</label>
			<input type="radio"  id="female" value="female" bind:group={formValues.gender}>
			<label for="female">Female</label>
		</div>
		<div>
			<button>Submit</button>
		</div>
	</form> -->
</main>

<style>
	/* input + label {
		display: inline-flex;
	} */
	/* .status{
		color: green;
	}
	.danger{
		color: red;
	}
	.promoted{
		font-style: italic;
	} */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
