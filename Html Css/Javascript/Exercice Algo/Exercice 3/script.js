let a = 0;
function lireEntier() {
    while (a === 0) {
        a = parseInt(prompt("Veuillez saisir la valeur de a (doit être différente de zéro):"))
        console.log(a)
    }

    b = parseInt(prompt("Veuillez saisir un second nombre :"))
    console.log(b)

    c = parseInt(prompt("Veuillez saisir un troisième nombre :"))
    console.log(c)

}

lireEntier();
let D = b * b - 4 * a * c;

if (D === 0) {
    var x = -b / (2 * a)
    console.log(`Il y a une solution double : x= ${x}`)
}
else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a),
        x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(`Il y a 2 soltuions : x1 = ${x1} et x2 = ${x2}`)
}
else {
    console.error("Il n'y a pas de solutions pour cette équation")
}
