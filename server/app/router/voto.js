const router = require('express').Router();
const Voto = require('../models/voto');


router.route('/votos/:user_orig')
    .get(function (req, res) {
        //res.json({data: 'hola:'+req.params.pid});
        Usuario.findById(req.params.user_orig).then(aVoto => {
            res.json(aVoto);
        }).catch(err => {
            console.log('Error getting voto:user_orig', err);
            res.status(500).send({ message: 'Server error' });
        });
    })
    .post(function (req, res) {
        let voto = new Voto();

        voto.idOrigVoto = req.body.idOrigVoto;
        voto.idDestVoto = req.body.idDestVoto;
        voto.tVotacion = req.body.tVotacion;
        voto.opcionVot = req.body.opcionVot;
        voto.descVot = req.body.descVot;

    });

router.route('/votos/:user_orig/:user_dest')
    .get(function (req, res) {
        //res.json({data: 'hola:'+req.params.pid});
        Usuario.findById(req.params.user_orig).then(aVoto => {
            res.json(aVoto);
        }).catch(err => {
            console.log('Error getting voto:user_orig/:user_dest', err);
            res.status(500).send({ message: 'Server error' });
        });
    });

module.exports = router;