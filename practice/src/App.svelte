<script>
  import { onMount } from "svelte";
  // import Timer from "./components/timer.svelte";
  let toDoList = [];
  let textInput = "";
  onMount(() => {
    //inputRef.focus();
    objStr();
  });

  function Save(toDoList) {
    let str = JSON.stringify(toDoList);
    localStorage.setItem("todos", str);
  }

  async function addToDo() {
    // toDoList = [...toDoList,{ content: textInput, editing: false, checked: false }]
    // textInput = " "
    // Save(toDoList)
    window.alert(`${textInput} Added`);

    let res = await fetch(`http://localhost:8081/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        content: textInput,
        editing: false,
        checked: false,
      }),
    });
    console.log(res);
  }

  async function setEditing(i, isEditing) {
    toDoList[i].editing = isEditing;
  }

  async function updateTodo(id, content) {
    await fetch(`http://localhost:8081/`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // params:JSON.stringify({  _id:id}),
      body: JSON.stringify({
        _id:id,
        content: content,
        editing: false,
        checked: false,
      }),
    });
  }

  async function deleteTodo(id) {
    await fetch(`http://localhost:8081/`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
  }

  //   let toDoList;
  //   let objStr = localStorage.getItem("todos");
  let objStr = async () => {
    let res = await fetch(`http://localhost:8081/`)
      .then((r) => r.json())
      .then((res) => res);
    toDoList = [...res];
  };

  //   if (objStr != null) {
  //     toDoList = (objStr());
  //   }
</script>

<main>
  <div>
    <!-- <Timer/> -->
    <h1>To-Do-List</h1>
    <p>Enter your ToDo here</p>
    <div style="display: flex;justify-content:center">
      <input type="text" bind:value={textInput} style="width: 350px;" />
      <button style="width: 100px;" on:click={addToDo}>Add</button>
    </div>
  </div>
  {#each toDoList as toDo, i}
    <div
      style="display: flex;place-content: baseline center;
    align-items: baseline;margin-top:15px"
    >
      {#if toDo.editing}
        <input type="text" bind:value={toDo.content} style="width: 300px;" />
      {:else}
        <input type="checkbox" bind:checked={toDo.checked} />
        <h4 style="width:300px;margin:0;text-align:justify;padding-left:20px">
          {toDo.content}
        </h4>
      {/if}
      <div style="display: flex;">
        {#if toDo.editing}
          <button
            style="margin:0;padding-right: 10px;"
            on:click={() => {
              updateTodo(toDo._id, toDo.content);
              setEditing(i, false);
            }}>Save</button
          >
        {:else}
          <button
            style="margin:0;padding-right: 10px;"
            on:click={() => setEditing(i, true)}>Edit</button
          >
        {/if}
        <button style="margin:0" on:click={() => deleteTodo(toDo._id)}
          >Delete</button
        >
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
