const mongoose     = require('mongoose','mongoose-type-email');
const Schema       = mongoose.Schema;

const UsuarioSchema   = new Schema({
    email:  {
        type: String,
        required: true,
        unique: true //[true, 'Email already used']
    },
    pssw: String,
    name: String,
    lastaname: String,
    imgPerfil: String

});

module.exports = mongoose.model('Usuario', UsuarioSchema);