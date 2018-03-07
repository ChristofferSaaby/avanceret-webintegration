let spiller_1 = {
    fornavn: `jens`,
    efternavn: `Hansen`,
    aktiv: false,
    point: 0,
    skiftAktiv: function () {
        this.aktiv = !this.aktiv;
    },
    givPoint: function (antal) {
        this.point += antal;
    },
    profil: function () {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
}

spiller_1.skiftAktiv();
spiller_1.givPoint(5);
spiller_1.profil();

console.log(spiller_1.profil());