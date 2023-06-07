import {loadRessource} from "./photoloader.js";
import {imageURL, photobox} from "./config.js";
export async function load(){
    const gallerie = {
        photos: [],
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
        totalPhotos: 0,
        next:null,
        prev:null,
    };
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

export async function next(gallerie){
    if(gallerie.currentPage < gallerie.totalPages){
        gallerie.currentPage++;
        const nextPageUrl = gallerie.next;
        console.log(nextPageUrl)
        let result = await loadRessource(imageURL+nextPageUrl);
        gallerie.photos = result.photos.map((e) => e.photo);
        gallerie.next = result.links && result.links.next && result.links.next.href;
        gallerie.prev = result.links && result.links.prev && result.links.prev.href;

    }
    return gallerie;
}
export async function prev(gallerie){

    if(gallerie.currentPage>1){
        gallerie.currentPage--;
        const prevPageUrl = gallerie.prev;
        let result = await loadRessource(imageURL+prevPageUrl);
        gallerie.photos = result.photos.map((e) => e.photo)
        gallerie.next = result.links && result.links.next && result.links.next.href;
        gallerie.prev = result.links && result.links.prev && result.links.prev.href;

    }
    console.log("test")
    return gallerie;
}
