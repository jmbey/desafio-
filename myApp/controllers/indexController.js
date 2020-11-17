const db = require('../database/models');

module.exports = {
    listMovies : (req, res) => {
        db.Movie.findAll()
        .then(function (result) { 
            return res.render("index", {
                listmovies: result})
        })
         .catch( error => { res.status(503).send(error) });
    }
    
    ,

    listSeries : (req, res) => {
        db.Serie.findAll()
        .then(function (result) { 
            return res.render("index", {
                series: result})
   
        })
        .catch( error => { res.status(503).send(error) });
    }

}