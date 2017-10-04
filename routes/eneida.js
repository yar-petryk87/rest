var express = require('express');
var router = express.Router();

var controllerEneida = require('../controllers/eneidaController');



router.get('/' , controllerEneida.getList);
router.get('/get' , controllerEneida.getById);
router.post('/add' , controllerEneida.addNewRow);
router.post('/delete' , controllerEneida.deleteRow);
router.get('/edit' , controllerEneida.editRow);
router.post('/update' , controllerEneida.updateRow);





module.exports = router;
