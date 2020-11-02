// let db = require('../database/models');

// module.exports = {

//     all: function(req, res) {
//         db.Movie.findAll()
//         .then(function(result) {
//             res.status(200).json(result);
//         })
//     },

//     search: function(req, res) {
//         db.Movie.findAll({
//             where: {
//                 title: {
//                     [db.Sequelize.Op.like]: `%${req.params.search}%`
//                 }
//             }
//         })
//         .then(function(result) {
//             res.status(200).json(result)
//         })
//     },
//     create: function (req, res) {
//         db.Movie.create({
//             title: req.body.title,
//             rating: req.body.rating,
//             awards: req.body.awards,
//             length: req.body.length
//         })
//         .then(response => res.status(201).json(response))
//     },
    
// };
