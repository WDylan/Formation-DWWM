function afficherHeure() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();


    heure = (heure < 10) ? "0" + heure : heure;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    secondes = (secondes < 10) ? "0" + secondes : secondes;

    let heureActuelle = `${heure}:${minutes}:${secondes}`;

    document.getElementById("heure").innerHTML = heureActuelle;
}

function afficherDate() {
    let date = new Date();
    let jour = ("0" + date.getDate()).slice(-2);
    let mois = ("0" + (date.getMonth() + 1)).slice(-2);
    let annee = date.getFullYear();

    let dateActuelle = `${jour}/${mois}/${annee}`;

    document.getElementById("date").innerHTML = dateActuelle;
}