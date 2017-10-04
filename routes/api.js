var express = require('express');
var router = express.Router();

var controllerApi = require('../controllers/apiController');



router.get('/' , controllerApi.getList);
router.get('/get' , controllerApi.getById);
router.post('/add' , controllerApi.addNewRow);
router.post('/delete' , controllerApi.deleteRow);
router.get('/edit' , controllerApi.editRow);
router.post('/update' , controllerApi.updateRow);





module.exports = router;
