var Colonos = require('../models/ContactoModel');
var Configs = require('../models/ConfigModel');

let getConfigs = (req, res) =>
{      
    //Listar resultados
    Configs.find()
    .then
    (
        (respuesta)=>
        {
            res.send(respuesta); //devuelvo resultado query   
            console.log(respuesta);
        },
        (err)=>{console.log(err);}
    )       
};

    
let getColonos = (req, res) =>
{      
    //Listar resultados
    Colonos.find({},{"numero":1, "cNombre":1,"cApellido":1, "cSocio":1, "cNumSocio":1, "pagado":1}, function(err,listaColonos)
    {

        res.status(200).send(listaColonos); //devuelvo resultado query   
        (err)=>
        {
            res.status(500).send(err);
            console.log(err);
        }
    });    
};


let getColonoById = (req, res) =>
{      
    //Obtener id busqueda
    let idBusqueda = {numero: req.body.dniBuscado};
    //Listar resultados
    Colonos.find(idBusqueda,function(err,colono)
    {
        res.status(200).send(colono); //devuelvo resultado query     
        (err)=>
        {
            res.status(500).send(err);
            console.log(err);
        }
 
    });
};

let addColono = (req,res) =>
{
    Colonos.find({}, {"numero":1}).sort({$natural:-1}).limit(1)
    .then
    (
        (numero)=> 
        {
            if(numero.length === 0)
                numero = 1;
            else
                numero = parseInt(numero[0].numero) + 1;
            
            var newColono = Colonos({
                numero: numero,
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
        
            newColono.save().then
            (
                (newColono)=>
                {
                    res.send(newColono); //devuelvo resultado query       
                },
                (err)=>{console.log(err);}
            ) 
        },
        (err)=>{console.log(err);}
    );   
}

let updatePagado = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newColono = { pagado: req.body.newData.pagado };
    await Colonos.findOneAndUpdate(id,newColono, function(){
        res.status(200).send({status: 'Actualizado'});

    });
    }

let updateDatosInsc = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newColono = { cNombre: req.body.newData.cNombre, 
                        cApellido: req.body.newData.cApellido,
                        cSexo: req.body.newData.cSexo, 
                        cFecha: req.body.newData.cFecha,
                        cDomicilio: req.body.newData.cDomicilio, 
                        cSocio: req.body.newData.cSocio,
                        cNumSocio: req.body.newData.cNumSocio };
    await Colonos.findOneAndUpdate(id,newColono)
    res.json({status: 'Actualizado'});
}

let updateDatosTutor = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newColono = { pNombre: req.body.newData.pNombre, 
        pApellido: req.body.newData.pApellido,
        pTel: req.body.newData.pTel, 
        pCel: req.body.newData.pCel,
        pWhapp: req.body.newData.pWhapp};
    await Colonos.findOneAndUpdate(id,newColono)
    res.json({status: 'Actualizado'});
}

let updateDatosMed = async (req,res) => 
{
    let id = { cDni: req.body.dniBuscado };
    let newColono = { cCeliaco: req.body.newData.cCeliaco, 
        cRespiratoria: req.body.newData.cRespiratoria,
        cERespiratoria: req.body.newData.cERespiratoria, 
        cCorazon: req.body.newData.cCorazon,
        cECorazon: req.body.newData.cECorazon, 
        cHeridas: req.body.newData.cHeridas,
        cEHeridas: req.body.newData.cEHeridas };
    await Colonos.findOneAndUpdate(id,newColono)
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
module.exports = {getConfigs, getColonos,addColono,updatePagado,updateDatosInsc,updateDatosTutor,updateDatosMed, deleteContacto,getColonoById};