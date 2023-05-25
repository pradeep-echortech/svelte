<!-- slots props -->
<script>
    let names = [
        {
            firstname:'Bruce',
            lastname: 'wayne',
        },
        {
            firstname:'Meher',
            lastname: 'Pradeep',
        },
        {
            firstname:'Virat',
            lastname: 'Kohli',
        },
    ]
</script>
{#each names as name (name)}
    <slot name="hero" firstname={name.firstname} lastname={name.lastname} />
{/each}

<!-- <div class="card"><slot>Default Content</slot></div> -->
<!-- <div class="card">
    <div>
        <slot name="header" />
    </div>
    <div>
        <slot name="content">Default Content</slot>
    </div>
    {#if $$slots.footer}
    <hr>
    <div>
        <slot name="footer" />
    </div>
    {/if}
</div> -->


<style>
    :global(h3) {
        color: rgb(7, 168, 149);
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
        width: 250px;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
