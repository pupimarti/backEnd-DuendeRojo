// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/listaColonos',function(req,res)
{
    apiController.getColonos(req,res);
});
//EndPoint para leer con filtro
router.post('/listaColonos/?idBusqueda',function(req,res)
{
    apiController.getColonoById(req,res);
});
//EndPoint para insertar en la BD
router.post('/addColono/Colono',function(req,res)
{
    apiController.addColono(req,res);
});

//EndPoint para modificar en la BD
router.post('/updatePagado/Colono',function(req,res)
{
    apiController.updatePagado(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateDatosInsc/Colono',function(req,res)
{
    apiController.updateDatosInsc(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateDatosTutor/Colono',function(req,res)
{
    apiController.updateDatosTutor(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
// Export API routes
module.exports = router;