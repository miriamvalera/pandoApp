const router = require('express').Router();

const msjController = require('../controllers/msj');

router.post('/add', voteController.addMsj);

module.exports = router;