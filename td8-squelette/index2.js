import {loadPicture, loadRessource} from './lib/photoloader.js';
import {displayCategorie, displayCommentaire, displayPicture} from "./lib/ui.js";
import {imageURL, photobox} from "./lib/config.js";
import { load,prev,next,first,last } from './lib/gallery.js';
import {display_galerie} from './lib/gallery.ui.js';


let gallery;
document.getElementById("load_gallery").addEventListener("click", async () => {
    try {
        gallery = await load();

        console.log(gallery.photos.length);
        display_galerie(gallery);
    } catch (error) {
        console.error(error);
    }
});

document.getElementById("previous_page").addEventListener("click", async () => {
    try{
        gallery = await prev(gallery)
        display_galerie(gallery);
    }catch (error){
        console.error(error);
    }
})


document.getElementById("next_page").addEventListener("click", async () =>{
    try{
        gallery = await next(gallery)
        display_galerie(gallery);
    }catch (error){
        console.error(error);
    }
})
document.getElementById("first_page").addEventListener("click", async () =>{
    try{
        gallery = await first(gallery)
        display_galerie(gallery);
    }catch (error){
        console.error(error);
    }
})

document.getElementById("last_page").addEventListener("click", async () =>{
    try{
        gallery = await last(gallery)
        display_galerie(gallery);
    }catch (error){
        console.error(error);
    }
})