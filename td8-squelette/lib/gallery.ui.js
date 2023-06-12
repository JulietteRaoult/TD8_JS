import {imageURL, photobox} from "./config.js";
import {getPictureQ4}  from "../index.js";

export function display_galerie(galerie){
    const galleryContainer = document.getElementById("gallery_container");
    galleryContainer.innerHTML = ""; // Efface le contenu précédent de la galerie
    galerie.photos.forEach(photo => {
        const vignette = createVignette(photo);
        galleryContainer.appendChild(vignette);
    });
}

function createVignette(photo) {
    const vignette = document.createElement("a");
    vignette.classList.add("vignette");

    const img = document.createElement("img");
    img.src = imageURL + photo.thumbnail.href;
    img.dataset.photoId = photo.id;
    vignette.appendChild(img);

    vignette.addEventListener("click", () => {
        getPictureQ4(photo.id); // Appeler la méthode getPicture avec l'ID de la photo
    });

    return vignette;
}