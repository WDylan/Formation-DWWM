function lireEntier() {
    x = prompt("Veuillez saisir la variable X : ")
    console.log(x);
    y = prompt("Veuillez saisir la variable Y : ")
    console.log(y);
}
lireEntier();
let result = Math.pow(x, y);
if (x === 0) {
    result = 0;
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : 0`);
}
else if (x === 1) {
    result = 1
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : 1`);
}
else {
    console.log(`X = ${x} et Y = ${y} le résultat attendu est : ${result}`)
}




