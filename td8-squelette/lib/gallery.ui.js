import {imageURL} from "./config.js";
import {getPictureQ4}  from "../index.js";

/**
 * Permet d'afficher la galerie
 * @param {*} galerie 
 */
export function display_galerie(galerie){
    const galleryContainer = document.getElementById("gallery_container");
    galleryContainer.innerHTML = ""; // Efface le contenu précédent de la galerie
    // Pour chaque photos on l'ajoute à la galerie
    galerie.photos.forEach(photo => {
        const vignette = createVignette(photo);
        galleryContainer.appendChild(vignette);
    });
}

/**
 * Permet de créer une vignette individuel pour afficher les images dans la galerie
 * @param {*} photo 
 * @returns la vignette 
 */
function createVignette(photo) {
    const vignette = document.createElement("div"); // on ajoute un div pour avoir un belle affichage
    vignette.classList.add("vignette");

    const img = document.createElement("img"); // on ajoute l'image dedant
    img.src = imageURL + photo.thumbnail.href;
    img.dataset.photoId = photo.id;
    vignette.appendChild(img);

    vignette.addEventListener("click", () => {
        getPictureQ4(photo.id); // Appeler la méthode getPicture avec l'ID de la photo
    });

    return vignette;
}