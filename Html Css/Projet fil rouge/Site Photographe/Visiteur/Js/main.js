var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}


import Contact from "./Classe/contact";

const ValiderBtn = document.querySelector('#validerBtn');
const tableau = document.querySelector('#tableau');

let contacts = [];

function createFakeContact() {
  let annuaire = [
    {
      titre: "Mr",
      nom: "Dupont",
      prenom: "Jean",
      tel: "+(33)6 12 36 54 78",
      email: "jdupont@gmail.com",
      date: "2023,10,10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque voluptatum facere eveniet illum dolorem."
    },
    {
      titre: "Mme",
      nom: "Doe",
      prenom: "Jeanne",
      tel: "+(33)6 45 23 87 14",
      email: "jdoe@yahoo.fr",
      date: "2023,07,02",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque voluptatum facere eveniet illum dolorem."
    },
    {
      titre: "Mr",
      nom: "Martin",
      prenom: "Jacques",
      tel: "+(33)6 78 45 24 95",
      email: "jmartin@petitrapporteur.fr",
      date: "2024,01,04",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque voluptatum facere eveniet illum dolorem"
    }
  ];
  for (let contact of annuaire) {
    contacts.push(new Contact(contact.titre, contact.nom, contact.prenom, contact.tel, contact.email, new Date(contact.date).toLocaleDateString(), contact.description));
  }
  insertList();
}

function insertList() {
  tableau.innerHTML = "";
  for (let contact of contacts) {
    tableau.innerHTML += `<tr>
                            <td>${contact.titre}<td>
                            <td>${contact.nom}<td>
                            <td>${contact.prenom}<td>
                            <td>${contact.tel}<td>
                            <td>${contact.email}<td>
                            <td>${contact.date}<td>
                            <td>${contact.description}<td>
                          </tr>`;
  }
}

function resetForm() {
  document.querySelector('#nom').value = "";
  document.querySelector('#prenom').value = "";
  document.querySelector('#tel').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#date').value = "";
  document.querySelector('#description').value = "";
}

ValiderBtn.onclick = () => {

  const nom = document.querySelector('#nom').value;
  const prenom = document.querySelector('#prenom').value;
  const tel = document.querySelector('#tel').value;
  const email = document.querySelector('#email').value;
  const date = document.querySelector('#date').value;
  const description = document.querySelector('#description').value;
  let titre = document.getElementById("Mr").checked ? "Mr" : "Mme";

  contacts.push(new Contact(titre, nom, prenom, tel, email, new Date(date).toLocaleDateString(), description));
  insertList();
  resetForm();
}

window.onload = createFakeContact();
