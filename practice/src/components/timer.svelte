<script>
    import {time,elapsedTime} from '../store/store'

    const dateFormatter = new Intl.DateTimeFormat('en',{
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second:'2-digit'
    })
    console.log($elapsedTime);
</script>

<div style="border: 2px solid black;">
    <h3>The Time is {dateFormatter.format($time)}</h3>
    <h3>You've been viewing this page since {$elapsedTime} seconds</h3>
</div>