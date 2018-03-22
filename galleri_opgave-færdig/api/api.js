module.exports = (app) => {
    app.get('/api/images', function(req, res){
        var allPictures = "SELECT * FROM billede";
        db.query(allPictures, function (err, results){
            if(err) {
                console.log(err);
            }else{
                console.log(results);
            }
            res.send(results);
        });
    })
}