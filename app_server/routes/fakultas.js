var express = require('express');
var router = express.Router();

// import controller
const fakultasController = require("../controllers/fakultasController")

router.get('/', fakultasController.index)  

// Route untuk menambahkan data fakultas
router.post("/store", fakultasController.store);

module.exports = router;