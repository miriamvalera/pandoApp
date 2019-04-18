const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;

const VotoSchema   = new Schema({    
    idOrigVoto: String,
    idDestVoto: String,
    tVotacion: String,
    opcionVot: [String],            
    descVot: String
});

module.exports = mongoose.model('Voto', VotoSchema);