let tab = [-2, 0, 1, 13, 24, 37, 44, 56, 99, 117];
console.log(tab)

// Première mmanière utilisé
function rechercherEntier(TabEntiers, X) {
    for (let i = 0; i < TabEntiers.length; i++) {
        if (TabEntiers[i] === X) {
            return i;
        }
    }
    return -1;
}


let saisieUti = parseInt(prompt("Veuillez saisir un nombre présent dans le tableau : "));
let index = rechercherEntier(tab, saisieUti);
if (index !== -1) {
    console.log(`En recherchant la valeur ${saisieUti}, la fonction retourne la valeur 
    ${index} : c'est le rang dans le tableau où elle a été trouvée.`)
} else {
    console.error(`En recherchant la valeur ${saisieUti}, la fonction ne retourne rien. 
    L'élément n'est pas présent dans le tableau.`)
}


// Recherche dichotomique
let x = parseInt(prompt("Veuillez saisir un nombre présent dans le tableau : "));
function rechercherEntier(tab, x) {
    let down = 0,
        up = tab.length - 1,
        middle,
        trouve = false;

    while (!trouve && down <= up) {
        middle = Math.floor((down + up) / 2);

        if (x < tab[middle]) {
            up = middle - 1;
        } else if (x > tab[middle]) {
            down = middle + 1;
        } else {
            trouve = true;
        }
    }
    if (trouve) {
        return middle
    } else {
        return -1
    }
}

let position = rechercherEntier(tab, x)

if (position === -1) {
    console.log(`${x} n'existe pas dans le tableau`);
} else {
    console.log(`${x} se trouve à la position ${position} dans le tableau`);
}