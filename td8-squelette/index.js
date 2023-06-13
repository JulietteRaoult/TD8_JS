// index.js

import {loadPicture} from './lib/photoloader.js';
import {displayCategorie, displayCommentaire, displayPicture,displayPictureOnly} from "./lib/ui.js";
import {imageURL} from "./lib/config.js";

/**
 * Fonction pour avoir l'image pour la question 4
 * @param {*} id 
 */
export function getPictureQ4(id) {
    loadPicture(id)
        .then(data => {
            const galleryContainer = document.getElementById("gallery_container");
            const pictureElement = document.createElement('div');
            pictureElement.innerHTML = displayPictureOnly(data.photo);

            // Supprimer les éléments existants en dessous de la galerie
            const existingPictureElements = document.getElementsByClassName("picture");
            for (let i = 0; i < existingPictureElements.length; i++) {
                existingPictureElements[i].remove();
            }

            pictureElement.classList.add("picture");
            galleryContainer.parentNode.appendChild(pictureElement);
        })



        .catch(error => {
            console.error(error); // Traitez les erreurs ici
        });


}

/**
 * Fonction pour avoir l'image ainsi que les commentaires, etc...
 * @param {*} id 
 */
export function getPicture(id) {
    loadPicture(id)
        .then(data => {

            const pictureElement = document.createElement('div');
            pictureElement.innerHTML = displayPicture(data.photo);

            let container = document.getElementById("la_photo");
            container.innerHTML ='';

            container.appendChild(pictureElement);

            getCategoryData(data).then(categorie=>{
                const categorieElement = document.createElement('div');
                categorieElement.innerHTML = displayCategorie(categorie.categorie);
                container.appendChild(categorieElement);
            });

            getCommentData(data).then(comments=>{
                console.log(comments);
                const commentsElement = document.createElement('div');
                commentsElement.innerHTML = displayCommentaire(comments);
                container.appendChild(commentsElement);
            });



        })
        .catch(error => {
            console.error(error); // Traitez les erreurs ici
        });
}

/**
 * Fonction pour vaori la categorie d'une image
 * @param {*} imageData 
 * @returns la reponse
 */
function getCategoryData(imageData) {
    return new Promise((resolve, reject) => {
        const categoryLink = imageURL+imageData.links.categorie.href;
        fetch(categoryLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête');
                }
                return response.json();
            })
            .then(categoryData => {
                resolve(categoryData);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * Fcontion pour avoir les commentaires d'une images
 * @param {*} imageData 
 * @returns la reponse
 */
function getCommentData(imageData) {
    return new Promise((resolve, reject) => {
        const categoryLink = imageURL+imageData.links.comments.href;
        fetch(categoryLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête');
                }
                return response.json();
            })
            .then(categoryData => {
                resolve(categoryData);
            })
            .catch(error => {
                reject(error);
            });
    });
}
// Utilisez la fonction getPicture pour la photo 105
getPicture(105);

