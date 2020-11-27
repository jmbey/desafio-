const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const { check, validationResult, body } = require("express-validator");



module.exports = {

    create : (req, res, next) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
    })
        .then(function (user) {
            res.redirect("/")
        })
        .catch(function (errors) {
            res.send(errors)
         
        })    
    },

    login: (req, res, next) => {
        return res.render('login')

    },

    register: (req, res, next) => {
        return res.render('register')

    },

    processLogin: (req, res, next) => {
            db.User.findOne({ where: { email: req.body.email } })
            .then(function (user) {

                if (user != null) {
                    if (req.body.password, user.password){
                        req.session.loggedUser = user;
                        res.redirect('/')
                    }
                }

        })},

        check: function (req, res, next) {
            // Para checkear usuario logueado users/check
            res.send("El usuario loggeado es " + req.session.loggedUser.email);
        },

        logout: function (req, res, next) {
            // para destruir la session
            req.session.destroy();
            res.redirect('/users/login');
        },



    }