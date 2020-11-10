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

};

