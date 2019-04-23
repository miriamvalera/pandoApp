const router = require('express').Router();
// const VotingController = require('../controllers/VotingController');
const Vote= require('../models/vote');
// router.post('/add', VotingController.addVote);

// module.exports = router;

router.route('/votaciones')
    .get(function (req, res) {

        Vote.find().then(votaciones => {
            res.json(votaciones);
        }).catch(err => {
            console.log('Error getting votaciones:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        const vote = new Vote({
            title: req.body.title,
            description: req.body.description,
            options: req.body.options
        });

        

    });


    module.exports = router;