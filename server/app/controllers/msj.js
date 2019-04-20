const Vote = require('../models/msj');

exports.addVote = function(req, res) {
    const msj = new msj({
        idMsg: req.body.idMsg,
        idOrig: req.body.idOrig,
        idDest: req.body.idDest,
        texto: req.body.texto,
        msgHora: req.body.msgHora
    });

    msj.save(function(err){
        if(err) {
            return next(err);
        }

        res.send('Tu mesnaje añadido');
    });
}