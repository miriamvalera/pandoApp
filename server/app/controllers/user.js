const User = require('../models/user');

exports.addUser = function(req, res) {
    const user = new User({
        email: req.body.email,
        pssw: req.body.pssw,
        name: req.body.name,
        lastaname: req.body.lastaname,
        imgPerfil: req.body.imgPerfil
    });

    user.save(function(err){
        if(err) {
            return next(err);
        }

        res.send('Usuario añadido');
    });
}