export default class Contact {
    constructor(titre, nom, prenom, tel, email, date, description) {
        this.titre;
        this.nom;
        this.prenom;
        this.tel;
        this.email;
        this.date;
        this.description;
    }
    getContact = () => `${this.titre} ${this.nom} ${this.prenom} ${this.tel} ${this.email} ${this.date} ${this.description}`;
}