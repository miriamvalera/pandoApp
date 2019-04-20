const Vote = require('../models/vote');

exports.addVote = function(req, res) {
    const vote = new Vote({
        idOrigVoto: req.body.idOrigVoto,
        idDestVoto: req.body.idDestVoto,
        tVotacion: req.body.tVotacion,
        opcionVot: req.body.opcionVot,
        descVot: req.body.descVot
    });

    vote.save(function(err){
        if(err) {
            return next(err);
        }

        res.send('Tu voto a sido añadido');
    });
}