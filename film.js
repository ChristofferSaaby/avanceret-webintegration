class film {
    constructor(title, længde) {
    this.title = title;
    this.længde = længde;
    this.vurdering = false;
    }
    givVurdering(){
        this.vurdering = !this.vurdering;
    }

    givLængde(tid) {
        this.længde += tid;
    };

    profil() {
        return `Filmen ${this.title} har længden ${this.længde} og er blevet vurderet som ${this.vurdering ? "God" : "Dårlig"}`
    };

    static filmoversigt() {
        let liste = [];
        liste.push(new film("Kongens Æble", "1time og 45min", "Erotic"));
        liste.push(new film("2 børn og den grimme sandhed", "26min", "Erotic"));
        liste.push(new film("Sugar Daddy", "2timer og 49min", "Erotic"));
        liste.push(new film("Hun sagde ikke nej", "46sekunder", "Erotic"));
        liste.push(new film("Kongens Nødder", "2 dage", "Erotic"));
        return liste;
    };

    static findFilm (liste = [], search = "") {
        liste.forEach(film => {
            if (film.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
            console.log(film.profil());
        });
    }
}

let filmliste = film.filmoversigt();
film.findFilm(filmliste, "ko");


filmliste.forEach(function (film) {
    //console.log(film.profil());
});