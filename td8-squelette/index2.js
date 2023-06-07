import {loadPicture, loadRessource} from './lib/photoloader.js';
import {displayCategorie, displayCommentaire, displayPicture} from "./lib/ui.js";
import {imageURL, photobox} from "./lib/config.js";
import { load,prev,next } from './lib/gallery.js';
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
        console.log("test2")
        gallery = await prev(gallery)
        console.log(gallery)
        display_galerie(gallery);
        console.log("test3")
    }catch (error){
        console.error(error);
    }
})


document.getElementById("next_page").addEventListener("click", async () =>{
    try{
        console.log("test2")
        gallery = await next(gallery)
        console.log(photobox)
        display_galerie(gallery);
        console.log("test3")
    }catch (error){
        console.error(error);
    }
})