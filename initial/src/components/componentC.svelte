<!-- <script>
    import {getContext} from 'svelte'
    const userName = getContext('username-context')
</script>

<h2>Child C Component</h2>
<h2>Child C UserName - {userName}</h2> -->

<!-- onMount -->

<!-- <script>
    import {onMount} from 'svelte'
    let posts = []
    onMount(async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await response.json()
        // console.log(posts);
    })
</script>

{#each posts as post (post.id)}
    <h3>{post.id}.{post.title}</h3>
    <p>{post.body}</p>
    <hr>
    {:else}
    <p>loading....</p>
{/each} -->

<!-- this binding -->
<!-- <script>
    import {onMount} from 'svelte'
    let inputref
    onMount(()=>{
        inputref.focus()
    })
</script>
<input type="text" bind:this={inputref}> -->

<!-- dynamic components -->
<h2>Component 3 Content</h2>