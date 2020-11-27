const db = require('../database/models');


    module.exports = {
        listMoviesySeries : (req, res) => {
            db.Movie.findAll({limit: 5})
            .then(function (resultmovie) {
                   db.Serie.findAll({limit: 5})
                    .then(function (resultserie) { 
                        return res.render("index", {
                            series: resultserie,
                            movies: resultmovie
                     })
                })
            })
            .catch( error => { res.status(503).send(error) });
        },
    }