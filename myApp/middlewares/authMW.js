function authMW (req, res, next) {
    if(req.session.loggedUser == undefined) {
        res.redirect('/users/login');
    
    } else if (req.session.loggedUser.admin == 1) {
            next()

    } else if (req.session.loggedUser.admin != 1) {
            res.send('You re not an admin user, you cant delete, edit or create');

    } 
};

module.exports = authMW;
