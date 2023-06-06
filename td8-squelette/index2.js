import {loadPicture, loadRessource} from './lib/photoloader.js';
import {displayCategorie, displayCommentaire, displayPicture} from "./lib/ui.js";
import {imageURL} from "./lib/config.js";
import { load } from './lib/gallery.js';
import {display_galerie} from './lib/gallery.ui.js';

document.getElementById("load_gallery").addEventListener("click", async () => {
    console.log('oui')
    try {
        const gallery = await load();

        console.log(gallery.photos.length);
        display_galerie(gallery);
    } catch (error) {
        console.error(error);
    }
});