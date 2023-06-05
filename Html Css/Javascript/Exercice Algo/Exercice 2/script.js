let N = 0,
    i = 1,
    result = 1;

nombre = Number(prompt("Veuillez saisir un nombre : "));
N = nombre;

while (i <= N) {
    result = result * i;
    i++;
}
console.log(`N vaut ${N} le résultat attendu est ${result}.`)
