const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const MensajesSchema   = new Schema({
    idOrig: String,
    idDest: String,
    texto: String,
    msgHora: String
    
  
});

module.exports = mongoose.model('Msj', MensajesSchema);