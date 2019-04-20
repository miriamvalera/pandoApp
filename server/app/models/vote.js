const mongoose = require('mongoose','mongoose-type-email');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({    
    idOrigVoto: String,
    idDestVoto: String,
    tVotacion: String,
    opcionVot: [String],            
    descVot: String
});

module.exports = mongoose.model('vote', VoteSchema);