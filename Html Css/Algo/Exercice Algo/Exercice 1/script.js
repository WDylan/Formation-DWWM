let N = 0,
    result = 0,
    i = 0;
N = Number(prompt("Veuillez saisir un nombre : "));

// Avec boucle Tant que Faire 
while (i <= N) {
    result = result + i;
    i++;
    console.log(`N vaut ${N} le resultat attendu est ${result}`)
}

// Avec boucle Répéter
do {
    result = result + i;
    i++;
} while (i <= N) {
    console.log(`N vaut ${N} le resultat attendu est : ${result}`)
}


// Avec boucle Pour
for (i; i <= N; i++) {
    result += + i
    console.log(`N vaut ${N} le resultat attendu est : ${result}`)
}