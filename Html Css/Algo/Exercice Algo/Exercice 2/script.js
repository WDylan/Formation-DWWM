let N = 0,
    i = 1,
    result = 1;

N = Number(prompt("Veuillez saisir un nombre : "));


// Avec méthode Tant que faire
// while (i <= N) {
//     result = result * i;
//     i++;
// }
// console.log(`N vaut ${N} le résultat avec tant que est ${result}.`)


// Avec methode Répéter
let cpt = N
if (N === 0 || N === 1) {
    console.log(`Le resultat avec répéter est : ${result}`)
} else {
    do {
        result *= cpt;
        cpt--;
    } while (cpt !== 1)
    console.log(`Le résultat avec répéter est : ${result}`)
}

// Avec méthode Pour
// if (N == 0 || N == 1) {
//     console.log(`Le résultat avec pour est ${result}`)
// }
// else {
//     for (i = N; i > 1; i = i - 1)
//         result = result * i;
//     console.log(`Le résultat avec pour est ${result}`);
// }
