var Colonos = require('../models/ContactoModel');
    
let getColonos = (req, res) =>
{      
    //Listar resultados
    Colonos.find({},{"cNombre":1,"cApellido":1, "cDni":1 , "pagado":1})
    .then
    (
        (listaColonos)=>
        {
            res.send(listaColonos); //devuelvo resultado query   
            //console.log(listaColonos);    
        },
        (err)=>{console.log(err);}
    )       
};


let getColonoById = (req, res) =>
{      
    //Obtener id busqueda
    let idBusqueda = {cDni: req.body.dniBuscado};
    //Listar resultados
    Colonos.find(idBusqueda)
    .then
    (
        (colono)=>
        {
            res.send(colono); //devuelvo resultado query     
        },
        (err)=>{console.log(err);}
    )       
};

let addColono = (req,res) =>
{
    var newContacto = Colonos({
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
        cCeliaco: req.body.cCeliaco,
        cRespiratoria: req.body.cRespiratoria,
        cERespiratoria: req.body.cERespiratoria,
        cCorazon: req.body.cCorazon,
        cECorazon: req.body.cECorazon,
        cHeridas: req.body.cHeridas,
        cEHeridas: req.body.cEHeridas,
        pagado: req.body.pagado
    });

    newContacto.save().then
    (
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    ) 
}

let updatePagado = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { pagado: req.body.newData.pagado };
    await Colonos.findOneAndUpdate(id,newContacto)
    res.json({status: 'Actualizado'});
}

let updateDatosInsc = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { cNombre: req.body.newData.cNombre, 
                        cApellido: req.body.newData.cApellido,
                        cSexo: req.body.newData.cSexo, 
                        cFecha: req.body.newData.cFecha,
                        cDomicilio: req.body.newData.cDomicilio, 
                        cSocio: req.body.newData.cSocio,
                        cNumSocio: req.body.newData.cNumSocio };
    await Colonos.findOneAndUpdate(id,newContacto)
    res.json({status: 'Actualizado'});
}

let updateDatosTutor = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { pNombre: req.body.newData.pNombre, 
        pApellido: req.body.newData.pApellido,
        pTel: req.body.newData.pTel, 
        pCel: req.body.newData.pCel,
        pWhapp: req.body.newData.pWhapp};
    await Colonos.findOneAndUpdate(id,newContacto)
    res.json({status: 'Actualizado'});
}

let updateDatosMed = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newContacto = { cCeliaco: req.body.newData.cCeliaco, 
        cRespiratoria: req.body.newData.cRespiratoria,
        cERespiratoria: req.body.newData.cERespiratoria, 
        cCorazon: req.body.newData.cCorazon,
        cECorazon: req.body.newData.cECorazon, 
        cHeridas: req.body.newData.cHeridas,
        cEHeridas: req.body.newData.cEHeridas };
    await Colonos.findOneAndUpdate(id,newContacto)
    res.json({status: 'Actualizado'});
}

let deleteContacto = (req,res)=>
{
    let id = { dni : req.body.dniEliminado};
    Colonos.deleteOne(id)
    .then
    (
        (resultado)=>
        {
            res.send(resultado); //devuelvo resultado        
        },
        (err)=>{console.log(err);}
    )       
   
}
module.exports = {getColonos,addColono,updatePagado,updateDatosInsc,updateDatosTutor,updateDatosMed, deleteContacto,getColonoById};

