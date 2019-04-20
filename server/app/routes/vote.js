const router = require('express').Router();

const voteController = require('../controllers/vote');

router.post('/add', voteController.addVote);

module.exports = router;