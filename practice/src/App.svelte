<script>
	export let name;
</script>

<main>
	<div style="">
		<h2>To-Do-List</h2> 
		<p>Enter your ToDo here</p>
		<div style="display: flex;justify-content:center">
			<input type="text" style="width: 350px;">
			<button style="width: 100px;">Add</button>
		</div>
	</div>
	<div style="display: flex;place-content: baseline center;align-items: baseline;">
		<input type="checkbox" name="" id="">
		<h4>Dummy text</h4>
		<button style="height: 40px;">Edit</button>
		<button>Delete</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	button{
		background-color: rgb(57, 57, 193);
		color: white;
	}
</style>