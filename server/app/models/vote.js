const mongoose = require('mongoose','mongoose-type-email');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    title: String,
    description: String,
    options: [{
        description: String
    }],
});

module.exports = mongoose.model('vote', VoteSchema);