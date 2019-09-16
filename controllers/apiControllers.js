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

let insertInscripto = (req,res) =>
{
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

let updatePagado = (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { pagado: req.body.newData.pagado };
    Contactos.findOneAndUpdate(id,newContacto,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        };
    
    });
}

let updateDatosInsc = (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { cNombre: req.body.newData.cNombre, 
                        cApellido: req.body.newData.cApellido,
                        cSexo: req.body.newData.cSexo, 
                        cFecha: req.body.newData.cFecha,
                        cDomicilio: req.body.newData.cDomicilio, 
                        cSocio: req.body.newData.cSocio,
                        cNumSocio: req.body.newData.cNumSocio };
    Contactos.findOneAndUpdate(id,newContacto,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        };
    
    });
}

let updateDatosTutor = (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { pNombre: req.body.newData.pNombre, 
                        pApellido: req.body.newData.pApellido,
                        pTel: req.body.newData.pTel, 
                        pCel: req.body.newData.pCel,
                        pWhapp: req.body.newData.pWhapp};
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
module.exports = {getContactos,insertInscripto,updatePagado,updateDatosInsc,updateDatosTutor,deleteContacto,getContactosById};

