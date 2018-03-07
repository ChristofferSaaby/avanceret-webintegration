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

    static HentSpillerListe() {
        let liste = [];
        liste.push(new spiller("palle", "Olsen"));
        liste.push(new spiller("Martin", "Laursen"));
        liste.push(new spiller("Noller", "Bondol"));
        liste.push(new spiller("Anna", "Mortensen"));
        return liste;
    };

    static FindSpiller(liste = [], search = "") {
        liste.forEach(spiller => {
            if (spiller.Fornavn.toLowerCase().indexOf(search.toLowerCase()) > -1)
            console.log(spiller.Profil());
        });
    }
}

let spillerListe = spiller.HentSpillerListe();

//spiller.FindSpiller(spillerListe, "ma");

    spillerListe.forEach(function (spiller) {
        spiller.GivPoint(10);
        //console.log(spiller);
        //console.log(spiller.Profil());
      
    })

