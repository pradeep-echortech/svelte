<script>
    let firstname = "meher";
    let lastname = "pradeep";
    $: fullname = `${firstname} ${lastname}`;
    let items =[
        {
            id:1,
            title:'phone',
            price: 100
        },
        {
            id:2,
            title:'tv',
            price: 200
        },
        {
            id:3,
            title:'laptop',
            price: 300
        },
    ]
    $:total = items.reduce((total,curr) =>(total = total +curr.price),0)
    $:console.log(`Fullname is ${firstname} ${lastname}`);
</script>

<main>
    <div>
        <button
            on:click={() => {
                firstname = "Bruce";
                lastname = "wayne";
            }}>change name</button>
        <h2>{fullname}</h2>
        <h2>
            Total - {total}
        </h2>
        <button on:click={()=>(items = [...items,{id:4,title:'keyboard',price:50}])}>
            Add item</button>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        text-align: center;
    }
</style>
