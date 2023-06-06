import {imageURL}  from "./config.js";
export function displayPicture(photo){

   let res = ' <img src="' + imageURL +photo.url.href + '">'
       res +=  '<h4>'+ photo.titre +'</h4>'
    res +=  ' <p>'+ photo.descr + '</p>'
    res +=  '  <p>'+ photo.type + ', '+ photo.width + ' , ' + photo.height +'</p>'

    // res +=  ' <h4>commentaires : </h4>'
    // res +=  '  <ul id="les_commentaires">'
    // res +=  '    <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vitae.</li>'
    // res +=  '       <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, recusandae.</li>'
    // res +=  '   </ul>'
    return res;
}

export function displayCategorie(categorie){
    let res =' <h4 id="la_categorie">categorie : '+ categorie.nom + '</h4>';

    return res
}

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