import {imageURL}  from "./config.js";

/**
 * Fcontion pour afficher la photo
 * @param {*} photo 
 * @returns la reponse html
 */
export function displayPicture(photo){

    // on construit la photo
   let  res = ' <img src="' + imageURL +photo.url.href + '">'
       res +=  '<h4>'+ photo.titre +'</h4>'
    res +=  ' <p>'+ photo.descr + '</p>'
    res +=  '  <p>'+ photo.type + ', '+ photo.width + ' , ' + photo.height +'</p>'

    return res;
}

/**
 * Fonction pour afficher la gallerie
 * @param {*} categorie 
 * @returns la reponse html
 */
export function displayCategorie(categorie){
    let res =' <h4 id="la_categorie">categorie : '+ categorie.nom + '</h4>';
    return res
}

/**
 * Fonction pour ajouter les commentaires
 * @param {*} commentaires 
 * @returns la reponse html
 */
export function displayCommentaire(commentaires){
    console.log(commentaires.comments.size);
    let res =' <h4>commentaires : </h4>'
    res +=  '  <ul id="les_commentaires">'
    commentaires.comments.forEach((e)=>{
        res +=  '    <li>pseudo : '+e.pseudo+' : '+e.content+'</li>'
    })
    res +=  '   </ul>'

    return res
}

/**
 * Fonction pour afficher uniquement l'image
 * Question 4
 * @param {*} photo 
 * @returns la réponse html
 */
export function displayPictureOnly(photo){

    let res = ' <img src="' + imageURL +photo.url.href + '">'
    return res;
}