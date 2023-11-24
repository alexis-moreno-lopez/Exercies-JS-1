let numero = prompt ("entrez un nombre");
function multiTable(nombre){
let message ="";
const tabs = [1,2,3,4,5,6,7,8,9,10];
tabs.forEach(number => {
    message += number + " x " + nombre + "="+ number * nombre +"\n"
    
});

return (message);
}
let resultat = multiTable(numero)
alert(resultat);

