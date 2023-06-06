let tab = [-2, 0, 1, 13, 24, 37, 44, 56, 99, 117];
console.log(tab)


function rechercherEntier(TabEntiers, X) {
    for (let i = 0; i < TabEntiers.length; i++) {
        if (TabEntiers[i] === X) {
            return i;
        }
    }
    return -1;
}

let saisieUti = parseInt(prompt("Veuillez saisir un nombre dans le tableau : "));
let index = rechercherEntier(tab, saisieUti);
if (index !== -1) {
    console.log(`En recherchant la valeur ${saisieUti}, la fonction retourne la valeur ${index} : c'est le rang dans le tableau où elle a été trouvée.`)
} else {
    `En recherchant la valeur ${saisieUti}, la fonction ne retourne rien. L'élément n'est pas présent dans le tableau.`
}