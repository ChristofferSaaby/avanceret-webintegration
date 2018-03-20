module.exports = (app) => {
    app.get('/', function(req, res){
        var allPictures = "SELECT * FROM billede";
        db.query(allPictures, function (err, results){
            if(err) {
                console.log(err)
            }else{
                console.log(results)
            }
        });

        var kategori = "SELECT * FROM billede WHERE fk_kategori = 1";
        db.query(kategori, function (err, results){
            if(err) {
                console.log(err)
            }else{
                console.log(results);
            }
        })
    })
}