let chaussure = prompt("entrez votre pointure de chaussure ");
let anneeNaissance = prompt("entrez votre année de naissance ");

function multi(chauss,annee){

    return (((((chauss* 2)+5)*50)-annee)+1766);
    

}


let resultat = multi(chaussure,anneeNaissance)

console.log(resultat)