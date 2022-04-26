import {writable, readable} from "svelte/store";

export const global = writable(0);

export const time = readable(new Date(), set => {
    setInterval(() => {set(new Date())}, 1000);        
});