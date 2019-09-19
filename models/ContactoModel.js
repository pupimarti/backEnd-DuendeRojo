var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactoSchema = new Schema({
      numero: String,
      cNombre: String,
      cApellido: String,
      cSexo: String,
      cFecha: String,
      cDni: String,
      cDomicilio: String,
      cSocio: String,
      cNumSocio: String,
      pNombre: String,
      pApellido: String,
      pTel: String,
      pCel: String,
      pWhapp: String,
      cCeliaco: String,
      cRespiratoria: String,
      cERespiratoria: String,
      cCorazon: String,
      cECorazon: String,
      cHeridas: String,
      cEHeridas: String,
      pagado: String
});

var Colonos = mongoose.model('Colono', contactoSchema);
module.exports = Colonos;