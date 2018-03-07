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

let spillerListe = [];
    spillerListe.push(new spiller("palle", "Olsen"));
    spillerListe.push(new spiller("Martin", "Laursen"));
    spillerListe[0].SkiftAktiv();

    spillerListe.forEach(function (spiller){
        spiller.GivPoint(10);
        //console.log(spiller);
        console.log(spiller.Profil());
      
    })

