class spiller {
    constructor(fornavn, efternavn) {
    this.Fornavn = fornavn;
    this.Efternavn = efternavn;
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
}

    spiller_1 = new spiller("palle", "Olsen");
    spiller_2 = new spiller("Martin", "Laursen");

spiller_1.SkiftAktiv();
spiller_1.GivPoint(5);

spiller_2.GivPoint(100);
spiller_2.SkiftAktiv();

console.log(spiller_1.Profil());
console.log(spiller_2.Profil());