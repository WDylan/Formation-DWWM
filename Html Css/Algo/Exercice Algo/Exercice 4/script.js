function lireEntier() {
    do {
        x = Number(prompt("Veuillez saisir la variable X (ne doit pas être négative): "))
        console.log(x);
        y = Number(prompt("Veuillez saisir la variable Y (ne doit pas être négative): "))
        console.log(y);
    } while (x < 0 || y < 0)
}


lireEntier();
let result = Math.pow(x, y);
if (x === 0) {
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : 0`);
}
else if (x === 1) {
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : 1`);
}
else {
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : ${result}`)
}