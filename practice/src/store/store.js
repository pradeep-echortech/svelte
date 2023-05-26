import {readable,derived} from 'svelte/store'

export const time = readable(new Date(),(set) =>{
    const intervel = setInterval(()=>{
        set(new Date())
    },1000)

    return function () {
        clearInterval(intervel)
    }
})

const start = new Date()

export const elapsedTime = derived(time , ($time)=>
    Math.round(($time - start) / 1000)
)
