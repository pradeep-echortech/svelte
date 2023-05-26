<script>
	import {onMount} from 'svelte'
    import Timer from './components/timer.svelte'
	let toDoList = []
	let textInput = ""
	let inputRef
	onMount(()=>{
		inputRef.focus()
	})

	function Save(toDoList) {
		let str = JSON.stringify(toDoList)
		localStorage.setItem('todos',str)
	}

	function addToDo() {
		toDoList = [...toDoList,{ content: textInput, editing: false, checked: false }]
		textInput = " "
		Save(toDoList)
	}

	function setEditing(i, isEditing) {
		toDoList[i].editing = isEditing;
		Save(toDoList)
	}
	
	function deleteTodo(i) {
		toDoList.splice(i, 1)
		toDoList = toDoList
		Save(toDoList)
	}
	
	let objStr = localStorage.getItem('todos')

	if (objStr != null) {
		toDoList = JSON.parse(objStr)
	}
</script>
<main>
<div>
	<Timer/>
	<h1>To-Do-List</h1>
	<p>Enter your ToDo here</p>
	<div style="display: flex;justify-content:center">
		<input type="text" bind:value={textInput} bind:this={inputRef} style="width: 350px;"/>
		<button style="width: 100px;" on:click={addToDo}>Add</button>
	</div>
</div>
{#each toDoList as toDo, i}
	<div style="display: flex;place-content: baseline center;
	align-items: baseline;margin-top:15px">
		{#if toDo.editing}
			<input type="text" bind:value={toDo.content} style="width: 300px;"/>
		{:else}
			<input type="checkbox" bind:checked={toDo.checked} />
			<h4 style="width:300px;margin:0;text-align:justify;padding-left:20px">
				{toDo.content}
			</h4>
		{/if}
		<div style="display: flex;">
			{#if toDo.editing}
			<button style="margin:0;padding-right: 10px;"
			on:click={() => setEditing(i, false)}>Save</button>
			{:else}
			<button style="margin:0;padding-right: 10px;"
			on:click={() => setEditing(i, true)}>Edit</button>
			{/if}
			<button style="margin:0" on:click={() => deleteTodo(i)}>Delete</button>
		</div>
	</div>
{/each}
</main>
<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	button {
		background-color: rgb(57, 57, 193);
		color: white;
		border-radius: 5px;
	}
</style>
