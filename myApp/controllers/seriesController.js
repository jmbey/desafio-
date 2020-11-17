const db = require('../database/models');

module.exports = {
    list : (req, res) => {
        db.Serie.findAll()
        .then(function (result) { 
            return res.render("series", {
                series: result})
   
        })
        .catch( error => { res.status(503).send(error) });
    },

    getOne : (req, res) => {
        db.Serie.findByPk(req.params.id)
        .then( result => {
            return res.render("detailSeries", {Serie: result});
        })
        .catch( error => { res.status(503).send(error) });
    },

    create : (req, res) => {
        db.Serie.create({
            title: req.body.title,
            release_date: req.body.release_date,
            end_date: req.body.end_date,
        })
        .then( result => {
            return res.render("create", {
                series: result});
        })
        .catch( error => { res.status(503).send(error) });
    }
};
