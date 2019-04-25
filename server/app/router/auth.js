const router = require('express').Router();
const Usuario = require('../models/usuario');
const jwt = require('../servicios/jwt');
// const nodemailer = require ('nodemailer');

router.route('/auth')
    .post(function (req, res) {
        let user = req.body.email_username;
        let password = req.body.pssw;
        console.log("password",password);
        console.log("user",user);

        Usuario.findOne({ email: user, pssw: password }, function (err, userLoggedIn) {
            if (err) res.status(500).send({ message: 'Server error' });
            else {
                if (!userLoggedIn) res.status(404).send({ message: 'There is no account with this email' });
                else {
                    let jwt_token = jwt.createToken(userLoggedIn);
                    res.status(200).send({
                        token: jwt_token.token
                    });
                    console.log('User logged in and token:', jwt_token);
                }
            }
        });
    });


module.exports = router;