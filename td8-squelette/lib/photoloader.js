import {url} from "./config.js";

/**
 * Fonction pour charger la photo
 * @param {*} idPicture 
 * @returns la reponse de l'api
 */
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

/**
 * Fonction pour retourner les informations d'un lien
 * @param {*} URI 
 * @returns 
 */
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