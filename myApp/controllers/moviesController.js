const db = require('../database/models');
const Genre = require('../database/models/Genre');

module.exports = {
    list : (req, res) => {
        db.Movie.findAll()
        .then(function (result) { 
            return res.render("movies", {
                movies: result})
        })
         .catch( error => { res.status(503).send(error) });
    },

    getOne : (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: [{association: "genre"}]
        })
        .then( result => {
            return res.render("detail", {Movie: result});
        })
     .catch( error => { res.status(503).send(error) });
    },

    create : (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre
        })
        .then( result => {
            return res.redirect("/movies");
        })
        .catch( error => { res.status(503).send(error) });
    },

    getGenres : (req, res) => {
        db.Genre.findAll ()
        .then (result => {
            return res.render("create", {
                genre: result
            })
        })
    }

    // update:  (req, res) => {

    // }

};
