<script>
    import {getContext} from 'svelte'
    const userName = getContext('username-context')
</script>

<h2>Child C Component</h2>
<h2>Child C UserName - {userName}</h2>