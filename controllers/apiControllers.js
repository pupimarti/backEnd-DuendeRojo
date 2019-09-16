var Contactos = require('../models/ContactoModel');
var bodyParser = require('body-parser');

    
let getContactos = (req, res) =>
{      
    //Listar resultados
    Contactos.find()
    .then
    (
        (listaContactos)=>
        {
            res.send(listaContactos); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};
let getContactosById = (req, res) =>
{      
    //Obtener id busqueda
    let idBusqueda = {dni: req.body.dniBuscado};
    console.log(idBusqueda);
    //Listar resultados
    Contactos.find(idBusqueda)
    .then
    (
        (listaContactos)=>
        {
            res.send(listaContactos); //devuelvo resultado query   
            console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};

let insertContacto = (req,res) =>
{
    console.log(req.body);
    var newContacto = Contactos({
        cNombre: req.body.cNombre,
        cApellido: req.body.cApellido,
        cSexo: req.body.cSexo,
        cFecha: req.body.cFecha,
        cDni: req.body.cDni,
        cDomicilio: req.body.cDomicilio,
        cSocio: req.body.cSocio,
        cNumSocio: req.body.cNumSocio,
        pNombre: req.body.pNombre,
        pApellido: req.body.pApellido,
        pTel: req.body.pTel,
        pCel: req.body.pCel,
        pWhapp: req.body.pWhapp,
        pagado: req.body.pagado
    });

    newContacto.save().
    then
    (
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    ) 
}

let updateContacto = (req,res) => 
{
    let id = { dni : req.body.dniBuscado};
    let newContacto = {nombre: req.body.newData.nombre};
    console.log(id);
    console.log(newContacto);
    Contactos.findOneAndUpdate(id,newContacto,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        };
    
    });
}

let deleteContacto = (req,res)=>
{
    let id = { dni : req.body.dniEliminado};
    Contactos.deleteOne(id)
    .then
    (
        (resultado)=>
        {
            res.send(resultado); //devuelvo resultado        
        },
        (err)=>{console.log(err);}
    )       
   
}
module.exports = {getContactos,insertContacto,updateContacto,deleteContacto,getContactosById};

