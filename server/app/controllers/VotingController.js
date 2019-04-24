const Vote = require('../models/vote');

exports.addVote = function(req, res) {

    const vote = new Vote({
        title: req.body.title,
        description: req.body.description,
        options: req.body.options
    });

    console.log(vote);

    vote.save(function(err){

        if (err) {
            res.send('Error');
            return next(err);
        } else {
            res.send(JSON.stringify(req.body));
        }
    });
};
