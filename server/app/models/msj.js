const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;


const MensajesSchema   = new Schema({
    idOrig: String,
    idDest: String,
    texto: String,
<<<<<<< HEAD
    fecha: String    
=======
    msgHora: String
    
  
>>>>>>> bdde3da91f39c98ab8e8204c0a9bffacef51105e
});

module.exports = mongoose.model('Msj', MensajesSchema);