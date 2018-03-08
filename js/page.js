let bamse = new spiller();

// finder knappen
let profilknap = document.querySelector ("#profil");

//lytter til knappen
profilknap.addEventListener ("click", function (event){
    console.log (bamse.Profil());
});
//====================================================================================================================

// finder knappen
let aktivknap = document.querySelector ("#skiftaktiv");

//lytter til knappen
aktivknap.addEventListener ("click", function (event){
    console.log (bamse.Profil());
});



// static HentSpillerListe() {
//     let liste = [];
//     liste.push(new spiller("palle", "Olsen"));
//     liste.push(new spiller("Martin", "Laursen"));
//     liste.push(new spiller("Noller", "Bondol"));
//     liste.push(new spiller("Anna", "Mortensen"));
//     return liste;
// };

// static FindSpiller(liste = [], search = "") {
//     liste.forEach(spiller => {
//         if (spiller.Fornavn.toLowerCase().indexOf(search.toLowerCase()) > -1)
//         console.log(spiller.Profil());
//     });
// }
// }

// let spillerListe = spiller.HentSpillerListe();

// //spiller.FindSpiller(spillerListe, "ma");

// spillerListe.forEach(function (spiller) {
//     spiller.GivPoint(10);
//     //console.log(spiller);
//     //console.log(spiller.Profil());
  
// })