const router = require('express').Router();
const VotingController = require('../controllers/VotingController');

router.post('/add', VotingController.addVote);

module.exports = router;
