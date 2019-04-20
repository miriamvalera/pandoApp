const mongoose = require('mongoose','mongoose-type-email');
const Schema = mongoose.Schema;

const MensajesSchema   = new Schema({
    idMsg: String,
    idOrig: String,
    idDest: String,
    texto: String,
    msgHora: Number
    
  
});

module.exports = mongoose.model('msj', MensajesSchema);