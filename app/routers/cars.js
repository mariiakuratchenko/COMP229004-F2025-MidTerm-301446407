var express = require('express');
var router = express.Router();

var carController = require('../controllers/cars');

router.get('/', carController.getAll);
router.post('/', carController.create);
router.get('/:carId', carController.getCar);
router.put('/:Id', carController.update);
router.delete('/:carId', carController.remove);

module.exports = router;