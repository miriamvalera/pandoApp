const router = require('express').Router();
const Usuario = require('../models/usuario');

router.route('/usuarios')
    .get(function (req, res) {

        Usuario.find().then(usuarios => {
            res.json(usuarios);
        }).catch(err => {
            console.log('Error getting usuarios:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let usuario = new Usuario();

        usuario.email = req.body.email;
        usuario.pssw = req.body.pssw;
        usuario.name = req.body.name;
        usuario.lastaname = req.body.lastaname;
        usuario.imgPerfil = req.body.imgPerfil;

        console.log('usuario:',usuario);

        Usuario.findOne({ email: usuario.email }).then(aUsuario => {
            if (aUsuario) {
                res.status(409).send({ message: 'This email already exists' });
                aUsuario = null;
            } else { aUsuario = usuario; }

            return aUsuario;
        }).then(aUsuario => {
            if (aUsuario) aUsuario.save();

            return aUsuario;
        }).then(usuarioGuardado => {
            console.log('usuarioGuardado:', usuarioGuardado);

            if (usuarioGuardado) {
                res.json(usuarioGuardado);
            }
        }).catch(err => {
            console.log('Error saving new usuario:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });
    
    router.route('/usuario/:uid')
        .get(function(req, res){
            //res.json({data: 'hola:'+req.params.pid});
            Usuario.findById(req.params.uid).then(aUsuario=>{
                res.json(aUsuario);
            }).catch(err => {
                console.log('Error getting usuario:', err);
                res.status(500).send({ message: 'Server error' });
            });
        });

module.exports = router;