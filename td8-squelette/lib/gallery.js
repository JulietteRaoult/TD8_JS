import {loadRessource} from "./photoloader.js";
import {photobox} from "./config.js";
export async function load(){
    const gallerie = {
        photos: [],
        // currentPage: 1,
        // pageSize: 10,
        // totalPages: 0,
        // totalPhotos: 0
    };
    let result = await loadRessource(photobox)/*.then(gallery=>{
        gallery.photos.forEach((e)=>{
            try {
                gallerie.photos.push(e.photo);
            } catch (error) {
                console.error(`Erreur lors du chargement de la photo d}`);
            }
        })
        })*/

    console.log(result);
    result.photos.forEach((e)=>{gallerie.photos.push(e.photo)})



    return gallerie;
}
