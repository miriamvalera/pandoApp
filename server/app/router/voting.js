const router = require('express').Router();
// const VotingController = require('../controllers/VotingController');
const Vote = require('../models/vote');
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
        const vote = new Vote();

        vote.title = req.body.title;
        vote.description = req.body.description;
        vote.options = req.body.options;

        console.log('votaciones: ', vote);

        vote.save().then(savedVote => {
            console.log('savedVote:', savedVote);

            if (savedVote) {
                res.json(savedVote);
            }
        }).catch(err => {
            console.log('Error saving new vote:', err);
            res.status(500).send({ message: 'Server error' });
        })

    });


module.exports = router;

