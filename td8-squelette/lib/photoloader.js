import {imageURL, url} from "./config.js";
export function loadPicture(idPicture) {
    return new Promise((resolve, reject) => {
        fetch(url + "/photos/" + idPicture)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function loadRessource(URI){
    return new Promise((resolve, reject) => {
        fetch(URI)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}