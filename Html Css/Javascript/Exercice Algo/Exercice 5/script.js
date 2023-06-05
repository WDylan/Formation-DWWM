let tab = [-2, 0, 1, 13, 24, 37, 44, 56, 99, 117];


function rechercherEntier(TabEntiers, X) {
    let start = 0;
    let end = TabEntiers.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (TabEntiers[middle] === X) {
            return middle
        } else if (TabEntiers[middle] < X) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

const X = prompt("Veuillez saisir un nombre : ");
const result = rechercherEntier(tab, X);
if (result != - 1) {
    console.log(`En recherchant la valeur ${X}, la fonction retourne la valeur ${result} : c'est le rand affichée pour produire le résultat`)
} else {
    console.log(`-1`)
}
44