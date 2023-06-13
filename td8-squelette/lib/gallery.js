import {loadRessource} from "./photoloader.js";
import {firstPage, imageURL, lastPage, photobox} from "./config.js";

/**
 * Fonction pour load les photos
 * @returns la gallerie correspondante
 */
export async function load(){
    // on crée une gallerie
    const gallerie = {
        photos: [],
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
        totalPhotos: 0,
        next:null,
        prev:null,
    };
    // on charge les ressources
    let result = await loadRessource(photobox)
    gallerie.totalPhotos=result.count;
    gallerie.totalPages = Math.ceil(result.count/result.size);
    if (result.links && result.links.next && result.links.next.href) {
        gallerie.next = result.links.next.href;
    }

    if (result.links && result.links.prev && result.links.prev.href) {
        gallerie.prev = result.links.prev.href;
    }
    result.photos.forEach((e)=>{gallerie.photos.push(e.photo)
    })

    return gallerie;
}

/**
 * Fonction pour changer de pages ( page suivante)
 * @param {*} gallerie 
 * @returns la gallerie correspondante
 */
export async function next(gallerie){
    // on verifie si on est pas à la fin
    if(gallerie.currentPage < gallerie.totalPages){
        // on va chercher dans l'API la gallerie correspondante
        gallerie.currentPage++;
        const nextPageUrl = gallerie.next;
        console.log(nextPageUrl)
        let result = await loadRessource(imageURL+nextPageUrl);
        gallerie.photos = result.photos.map((e) => e.photo);
        gallerie.next = result.links && result.links.next && result.links.next.href;
        gallerie.prev = result.links && result.links.prev && result.links.prev.href;
        const existingPictureElements = document.getElementsByClassName("picture");
        for (let i = 0; i < existingPictureElements.length; i++) {
            existingPictureElements[i].remove();
        }
    }
    return gallerie;
}

/**
 * Fonction pour changer de pages ( page précedente)
 * @param {*} gallerie 
 * @returns la gallerie correspondante
 */
export async function prev(gallerie){
    //on vérifie si nous ne sommes pas sur la 1er page
    if(gallerie.currentPage>1){
        gallerie.currentPage--;
        const prevPageUrl = gallerie.prev;
        let result = await loadRessource(imageURL+prevPageUrl);
        gallerie.photos = result.photos.map((e) => e.photo)
        gallerie.next = result.links && result.links.next && result.links.next.href;
        gallerie.prev = result.links && result.links.prev && result.links.prev.href;
        const existingPictureElements = document.getElementsByClassName("picture");
        for (let i = 0; i < existingPictureElements.length; i++) {
            existingPictureElements[i].remove();
        }
    }
    return gallerie;
}

/**
 * Fcontion pour charger la 1er pages
 * @param {*} gallerie 
 * @returns la gallerie correspondante
 */
export async function first(gallerie){
    const existingPictureElements = document.getElementsByClassName("picture");
    for (let i = 0; i < existingPictureElements.length; i++) {
        existingPictureElements[i].remove();
    }
    let result = await loadRessource(firstPage);
    gallerie.photos = result.photos.map((e) => e.photo);
    gallerie.next = result.links && result.links.next && result.links.next.href;
    gallerie.prev = result.links && result.links.prev && result.links.prev.href; // Mettre à jour le lien précédent
    return gallerie;
}

/**
 * Fonction pour charger la dernière page
 * @param {*} gallerie 
 * @returns la gallerie correspondante
*/
export async function last(gallerie){
    const existingPictureElements = document.getElementsByClassName("picture");
    for (let i = 0; i < existingPictureElements.length; i++) {
        existingPictureElements[i].remove();
    }
    gallerie.currentPage=11;
    let result = await loadRessource(lastPage);
    gallerie.photos = result.photos.map((e) => e.photo);
    gallerie.next = result.links && result.links.next && result.links.next.href;
    gallerie.prev = result.links && result.links.prev && result.links.prev.href; // Mettre à jour le lien précédent
    return gallerie;
}