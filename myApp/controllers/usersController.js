const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require("../database/models");


module.exports = {

    create : (req, res, next) => {
    db.User.create({
        username: req.body.userName,
        email: req.body.userEmail,
        password: bcrypt.hashSync(req.body.userPassword, 10),
    })
        .then(function (user) {
            res.redirect("/users/login")
        })
        .catch(function (errors) {
            res.send(errors)
         
        })

    
    },

    // quiero probar a ver si se conecta con la tabla users
    list : (req, res, next) => {
    db.User.findAll()
    .then(function (result) { 
        return (result)
    })
     .catch( error => { res.status(503).send(error) });
},

getOne : (req, res) => {
    db.Movie.findByPk(req.params.id)
    .then( result => {
        return res.status(200).json(result);
    })
    // .catch( error => { res.status(503).send(error) });
},

}