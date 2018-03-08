class spiller {
    constructor(fornavn, efternavn) {
    this.Fornavn = "";
    this.Efternavn = "hans";
    this.Aktiv = false;
    this.Point = 0;
}
    SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    };
    GivPoint(antal) {
        this.Point += antal;
    };
    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    };

    udskriv() {

    }
}

