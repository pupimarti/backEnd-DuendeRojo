var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactoSchema = new Schema({
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
      pagado: String
});

var Colonos = mongoose.model('Colono', contactoSchema);
console.log("se creo modelo");
module.exports = Colonos;