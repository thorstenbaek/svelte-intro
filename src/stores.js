import {writable, readable, derived} from "svelte/store";

export const hours = writable(0);

export const time = readable(new Date(), set => {
    setInterval(() => {set(new Date())}, 1000);        
});

export const nextTime = derived(
    [time, hours],
    ([$time, $hours], set) => {
    
    var dt = new Date($time);
    
    dt.setHours(dt.getHours() + $hours);
    set(dt);
});